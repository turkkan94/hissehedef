const getSingleStock = async (symbol) => {
  try {
    const res = await fetch(`${process.env.MAIN_API}/stocks/${symbol}/`);
    if (res.status == 200) {
      const stockSingle = await res.json();
      return stockSingle;
    } else {
      throw `error with status ${res.status}`;
    }
  } catch (error) {
    console.log(error);
  }
};

const getStockList = async () => {
  const res = await fetch(`${process.env.MAIN_API}/stocks/`);
  const stockList = await res.json();

  return stockList;
};

export { getSingleStock, getStockList };
