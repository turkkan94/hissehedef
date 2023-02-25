const getSingleStock = async (symbol) => {
  const res = await fetch(`${process.env.MAIN_API}/stocks/${symbol}/`);
  const stockSingle = await res.json();
  return stockSingle;
};

const getStockList = async (page) => {
  let res;
  try {
    if (page) {
      res = await fetch(`${process.env.MAIN_API}/stocks/?page=${page}`);
    } else {
      res = await fetch(`${process.env.MAIN_API}/stocks/`);
    }
    const stockList = await res.json();
    return stockList;
  } catch (error) {
    console.log(error);
  }
};

const getStockListBySector = async (sector_id, page) => {
  let res;
  try {
    if (page) {
      res = await fetch(
        `${process.env.MAIN_API}/stocks/?sector=${sector_id}&page=${page}`
      );
    } else {
      res = await fetch(`${process.env.MAIN_API}/stocks/?sector=${sector_id}`);
    }

    if (res.status == 200) {
      const stockList = await res.json();
      return stockList;
    } else {
      throw `Sektöre göre hisse verileri alınırken hata: ${res.status}`;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSectorList = async () => {
  try {
    const res = await fetch(`${process.env.MAIN_API}/sectors/`);
    if (res.status == 200) {
      const sectorList = await res.json();
      return sectorList;
    } else {
      throw `Sektör listesi alınırken hata: ${res.status}`;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSingleSector = async (slug) => {
  const res = await fetch(`${process.env.MAIN_API}/sectors/${slug}/`);
  const sectorSingle = await res.json();
  return sectorSingle;
};

const setFavoriteList = async (list) => {
  const res = await fetch(
    `${process.env.MAIN_API}/filtered-stocks/?ids=${list}`
  );
  const stocks = await res.json();
  let symbols = [];
  for (let i = 0; i < list.length; i++) {
    symbols.push(stocks[i].symbol.toUpperCase() + ".IS");
  }
  const favoriteList = symbols.join("%2C");
  return favoriteList;
};

const getStocksById = async (list) => {
  const res = await fetch(
    `${process.env.MAIN_API}/filtered-stocks/?ids=${list}`
  );
  const stocks = await res.json();
  return stocks;
};

export {
  getSingleStock,
  getStockList,
  getStockListBySector,
  getSectorList,
  getSingleSector,
  getStocksById,
  setFavoriteList,
};
