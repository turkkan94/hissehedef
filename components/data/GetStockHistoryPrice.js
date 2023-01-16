const getStockHistoryPrice = async (symbol, startDate) => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v7/finance/chart/${symbol}.IS?interval=1d&events=history&includeAdjustedClose=true&period1=${startDate}&period2=${startDate}`
  );

  const stockPrice = await res.json();

  return {
    stockPrice,
  };
};

export default getStockHistoryPrice;
