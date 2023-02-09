const getSingleStock = async (symbol) => {
  try {
    const res = await fetch(`${process.env.MAIN_API}/stocks/${symbol}/`);
    const stockSingle = await res.json();
    return stockSingle;
  } catch (error) {
    console.log(error);
  }
};

const getStockList = async () => {
  try {
    const res = await fetch(`${process.env.MAIN_API}/stocks/`);
    if (res.status == 200) {
      const stockList = await res.json();
      return stockList;
    } else {
      throw `Hisse listesi alınırken hata: ${res.status}`;
    }
  } catch (error) {}
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
  try {
    const res = await fetch(`${process.env.MAIN_API}/sectors/${slug}/`);
    if (res.status == 200) {
      const sectorSingle = await res.json();
      return sectorSingle;
    } else {
      throw `Tekil sektör verisi alınırken hata: ${res.status}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSingleStock, getStockList, getSectorList, getSingleSector };
