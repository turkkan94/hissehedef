const getStockQuoteSummary = async (symbol) => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`,
    { next: { revalidate: 60 } }
  );

  if (res.status == 200) {
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
    return {
      stockPrice,
      stockSummary,
      stockBalanceQuarterly,
      stockIncomeQuarterly,
      period,
      totalStockHolderPercent,
    };
  } else {
    throw `Yahoo quoteSummary api verisinde hata: ${res.status}`;
  }
};

const getStockQuote = async (symbol) => {
  try {
    const res = await fetch(
      `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbol.toUpperCase()}.IS`
    );
    if (res.status == 200) {
      const stockQuoteData = await res.json();
      const stockQuote = stockQuoteData.quoteResponse.result[0];
      return stockQuote;
    } else {
      throw `Yahoo quote api verisinde hata: ${res.status}`;
    }
  } catch (error) {
    console.log(error);
  }
};

const getFavoritesData = async (favoriteList) => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${favoriteList}`,
    { next: { revalidate: 60 } }
  );
  const stockData = await res.json();
  return stockData;
};

const getStockData = async (symbol) => {
  try {
    const res = await fetch(
      `https://www.hissehedef.com/api/stocks/${symbol}/`,
      {
        cache: "no-cache",
      }
    );
    if (res.status == 200) {
      const stockSingle = await res.json();
      return stockSingle;
    } else {
      console.log("Yahoo hisse verisi hata");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getStockQuoteSummary, getStockQuote, getFavoritesData, getStockData };
