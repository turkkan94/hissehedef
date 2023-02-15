const getStockPrices = async (symbol, range) => {
  const resStockPrice = await fetch(
    `https://query1.finance.yahoo.com/v8/finance/chart/${symbol.toUpperCase()}.IS?&interval=1d&range=${range}`,
    { cache: "no-store" }
  );

  const stockPrice = await resStockPrice.json();
  const timeList = stockPrice.chart.result[0].timestamp;
  const low = stockPrice.chart.result[0].indicators.quote[0].low;
  const open = stockPrice.chart.result[0].indicators.quote[0].open;
  const high = stockPrice.chart.result[0].indicators.quote[0].high;
  const close = stockPrice.chart.result[0].indicators.quote[0].close;
  let stockPriceSeries = [];

  for (let i = 0; i < timeList.length; i++) {
    let obj = {};
    if (open[i] == null) {
      obj = {
        x: new Date(timeList[i] * 1000).toString(),
        y: [
          open[i - 1].toFixed(2),
          high[i - 1].toFixed(2),
          low[i - 1].toFixed(2),
          close[i - 1].toFixed(2),
        ],
      };
    } else {
      obj = {
        x: new Date(timeList[i] * 1000).toString(),
        y: [
          open[i].toFixed(2),
          high[i].toFixed(2),
          low[i].toFixed(2),
          close[i].toFixed(2),
        ],
      };
    }

    stockPriceSeries.push(obj);
  }
  return stockPriceSeries;
};

export default getStockPrices;
