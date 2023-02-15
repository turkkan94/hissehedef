const getSingleStock = async (symbol) => {
  try {
    const res = await fetch(`${process.env.MAIN_API}/stocks/${symbol}/`, {
      cache: "force-cache",
    });
    const stockSingle = await res.json();
    return stockSingle;
  } catch (error) {
    console.log(error);
  }
};

const getStockList = async (page) => {
  let res;
  try {
    if (page) {
      res = await fetch(`${process.env.MAIN_API}/stocks/?page=${page}`, {
        cache: "force-cache",
      });
    } else {
      res = await fetch(`${process.env.MAIN_API}/stocks/`, {
        cache: "force-cache",
      });
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
        `${process.env.MAIN_API}/stocks/?sector=${sector_id}&page=${page}`,
        { cache: "force-cache" }
      );
    } else {
      res = await fetch(`${process.env.MAIN_API}/stocks/?sector=${sector_id}`, {
        cache: "force-cache",
      });
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
    const res = await fetch(`${process.env.MAIN_API}/sectors/`, {
      cache: "force-cache",
    });
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
    const res = await fetch(`${process.env.MAIN_API}/sectors/${slug}/`, {
      cache: "force-cache",
    });
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

export {
  getSingleStock,
  getStockList,
  getStockListBySector,
  getSectorList,
  getSingleSector,
};
