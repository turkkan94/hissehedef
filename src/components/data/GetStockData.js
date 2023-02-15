// const getStockData = async (symbol) => {
//   try {
//     const resQuoteSummary = await fetch(
//       `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`
//     );

//     const resQuote = await fetch(
//       `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbol.toUpperCase()}.IS`
//     );

//     const stockData = await resQuoteSummary.json();
//     const stockQuoteData = await resQuote.json();

//     const stockPrice = stockData.quoteSummary.result[0].price;
//     const stockSummary = stockData.quoteSummary.result[0].summaryDetail;
//     const stockBalanceQuarterly =
//       stockData.quoteSummary.result[0].balanceSheetHistoryQuarterly
//         .balanceSheetStatements;

//     const stockIncomeQuarterly =
//       stockData.quoteSummary.result[0].incomeStatementHistoryQuarterly
//         .incomeStatementHistory;

//     const totalStockHolderPercent =
//       stockBalanceQuarterly[0].totalStockholderEquity.raw /
//       stockBalanceQuarterly[1].totalStockholderEquity.raw;

//     let list = [];
//     let currentYear;
//     let period = 0;

//     stockBalanceQuarterly.map((e) => {
//       list.push(e.endDate.fmt.split("-")[0]);
//     });

//     for (let i = 0; i < list.length; i++) {
//       if (list[i - 1] > list[i]) {
//         currentYear = list[i - 1];
//       } else {
//         currentYear = list[i];
//       }
//     }
//     list.map((el) => {
//       if (el == currentYear) period++;
//     });

//     const stockQuote = stockQuoteData.quoteResponse.result[0];

//     return {
//       stockPrice,
//       stockSummary,
//       stockQuote,
//       stockBalanceQuarterly,
//       stockIncomeQuarterly,
//       period,
//       totalStockHolderPercent,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

const getStockQuoteSummary = async (symbol) => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CbalanceSheetHistoryQuarterly%2CincomeStatementHistoryQuarterly%2CsummaryDetail`,
    { cache: "no-cache" }
  );

  if (res.status == 200) {
    const stockData = await res.json();
    const stockPrice = stockData.quoteSummary.result[0].price;
    const stockSummary = stockData.quoteSummary.result[0].summaryDetail;
    const stockBalanceQuarterly =
      stockData.quoteSummary.result[0].balanceSheetHistoryQuarterly
        .balanceSheetStatements;

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

export { getStockQuoteSummary, getStockQuote };
