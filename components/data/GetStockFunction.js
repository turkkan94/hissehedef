const getStockData = async (symbol) => {
  const resQuoteSummary = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2Cprice%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`
  );

  const resQuote = await fetch(
    `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbol.toUpperCase()}.IS`
  );
  const stockData = await resQuoteSummary.json();
  const stockQuoteData = await resQuote.json();

  const stockPrice = stockData.quoteSummary.result[0].price;
  const stockSummary = stockData.quoteSummary.result[0].summaryDetail;
  const stockQuote = stockQuoteData.quoteResponse.result[0];
  const stockBalanceQuarterly =
    stockData.quoteSummary.result[0].balanceSheetHistoryQuarterly
      .balanceSheetStatements;

  const stockIncomeQuarterly =
    stockData.quoteSummary.result[0].incomeStatementHistoryQuarterly
      .incomeStatementHistory;

  let list = [];
  let currentYear;
  let period = 0;

  stockBalanceQuarterly.map((e) => {
    list.push(e.endDate.fmt.split("-")[0]);
  });

  for (let i = 0; i < list.length; i++) {
    if (list[i - 1] > list[i]) {
      currentYear = list[i - 1];
      break;
    }
  }
  list.map((el) => {
    if (el == currentYear) period++;
  });

  return {
    stockPrice,
    stockSummary,
    stockQuote,
    stockBalanceQuarterly,
    stockIncomeQuarterly,
    period,
  };
};

export default getStockData;
