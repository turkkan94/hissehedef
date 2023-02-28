export async function GET(request, { params: { symbol } }) {
  const resYahoo = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`
  );
  const resAPI = await fetch(`https://api.hissehedef.com/stocks/${symbol}`);

  const dataYahoo = await resYahoo.json();
  const dataAPI = await resAPI.json();

  const stockPrice = dataYahoo.quoteSummary.result[0].price;
  const stockSummary = dataYahoo.quoteSummary.result[0].summaryDetail;

  let stock = {
    details: {
      title: dataAPI.title,
      symbol: dataAPI.symbol,
      currentPrice: stockPrice.regularMarketPrice || 0,
      previousClose: stockPrice.regularMarketPreviousClose || 0,
      priceChangePercent:
        Number((stockPrice.regularMarketChangePercent * 100).toFixed(2)) || 0,
      marketCap: stockPrice.marketCap || 0,
      bookValue: 0,
      bookValueFmt: null,
      bookValueRatio: 0,
      commonStock: 0,
      commonStockFmt: null,
      earningsPerShare: null,
      trailingEPS: null,
      trailingPE: stockSummary.trailingPE || 0,
      priceToBook: null,
      period: 0,
    },
    balance: { available: 0, sheets: [] },
    income: { available: 0, sheets: [] },
  };

  //STOCK BALANCE//
  const stockBalanceData =
    dataYahoo.quoteSummary.result[0].balanceSheetHistoryQuarterly
      .balanceSheetStatements;

  for (let i = 0; i < stockBalanceData.length; i++) {
    if (stockBalanceData[i].cash) {
      stock.balance.sheets.push(stockBalanceData[i]);
      stock.balance.available++;
    }
  }
  if (stock.balance.sheets.length >= 1) {
    stock.details.bookValue =
      stock.balance.sheets[0].totalStockholderEquity.raw;
    stock.details.bookValueFmt =
      stock.balance.sheets[0].totalStockholderEquity.fmt;
    stock.details.commonStock = stock.balance.sheets[0].commonStock.raw;
    stock.details.commonStockFmt = stock.balance.sheets[0].commonStock.fmt;
    stock.details.priceToBook = Number(
      (
        stockPrice.marketCap /
        stock.balance.sheets[0].totalStockholderEquity.raw
      ).toFixed(2)
    );
  }

  if (stock.balance.sheets.length >= 2) {
    stock.details.bookValueRatio =
      stock.balance.sheets[0].totalStockholderEquity.raw /
      stock.balance.sheets[1].totalStockholderEquity.raw;
  }

  let list = [];
  let currentYear;
  stock.balance.sheets.map((e) => {
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
    if (el == currentYear) stock.details.period++;
  });

  //STOCK INCOME//
  const stockIncomeData =
    dataYahoo.quoteSummary.result[0].incomeStatementHistoryQuarterly
      .incomeStatementHistory;

  for (let i = 0; i < stockIncomeData.length; i++) {
    if (stockIncomeData[i].totalRevenue) {
      stock.income.sheets.push(stockIncomeData[i]);
      stock.income.available++;
    }
  }

  //Mixed Info//

  if (
    stock.income.sheets.length >= 4 &&
    stock.balance.sheets[0].commonStock.raw
  ) {
    stock.details.earningsPerShare = Number(
      (
        (stock.income.sheets[0].netIncome.raw +
          stock.income.sheets[1].netIncome.raw +
          stock.income.sheets[2].netIncome.raw +
          stock.income.sheets[3].netIncome.raw) /
        stock.balance.sheets[0].commonStock.raw
      ).toFixed(2)
    );
  }

  if (stock.details.period == 1) {
    let incomeYearly = stock.income.sheets[0].netIncome.raw * 4;
    let EPS = incomeYearly / stock.details.commonStock;
    stock.details.trailingEPS = EPS;
  } else if (stock.details.period == 2) {
    let incomeYearly =
      ((stock.income.sheets[0].netIncome.raw +
        stock.income.sheets[1].netIncome.raw) /
        2) *
      4;
    let EPS = incomeYearly / stock.details.commonStock;
    stock.details.trailingEPS = EPS;
  } else if (stock.details.period == 3) {
    let incomeYearly =
      ((stock.income.sheets[0].netIncome.raw +
        stock.income.sheets[1].netIncome.raw +
        stock.income.sheets[2].netIncome.raw) /
        3) *
      4;
    let EPS = incomeYearly / stock.details.commonStock;
    stock.details.trailingEPS = EPS;
  } else if (stock.details.period == 4) {
    let incomeYearly =
      stock.income.sheets[0].netIncome.raw +
      stock.income.sheets[1].netIncome.raw +
      stock.income.sheets[2].netIncome.raw +
      stock.income.sheets[3].netIncome.raw;

    let EPS = incomeYearly / stock.details.commonStock;
    stock.details.trailingEPS = EPS;
  }

  return Response.json({
    stock,
  });
}
