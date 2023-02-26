export async function GET(request, { params: { symbol } }) {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`,
    { next: { revalidate: 60 } }
  );

  const stockData = await res.json();
  const stockPrice = stockData.quoteSummary.result[0].price;
  const stockSummary = stockData.quoteSummary.result[0].summaryDetail;
  const stockBalanceData =
    stockData.quoteSummary.result[0].balanceSheetHistoryQuarterly
      .balanceSheetStatements;

  let stockBalanceQuarterly = [];

  for (let i = 0; i < stockBalanceData.length; i++) {
    if (stockBalanceData[i].cash) {
      stockBalanceQuarterly.push(stockBalanceData[i]);
    }
  }

  const stockIncomeQuarterly =
    stockData.quoteSummary.result[0].incomeStatementHistoryQuarterly
      .incomeStatementHistory;

  const totalStockHolderPercent =
    stockBalanceQuarterly[0].totalStockholderEquity.raw /
    stockBalanceQuarterly[1].totalStockholderEquity.raw;
  let list = [];
  let currentYear;
  let period = 0;

  stockBalanceQuarterly.map((e) => {
    list.push(e.endDate.fmt.split("-")[0]);
  });

  for (let i = 0; i < list.length; i++) {
    if (list[i - 1] > list[i]) {
      currentYear = list[i - 1];
    } else {
      currentYear = list[i];
    }
  }
  list.map((el) => {
    if (el == currentYear) period++;
  });

  return Response.json({
    stockPrice,
    stockSummary,
    stockBalanceQuarterly,
    stockIncomeQuarterly,
    period,
    totalStockHolderPercent,
  });
}
