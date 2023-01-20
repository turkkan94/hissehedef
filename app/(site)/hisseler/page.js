import React from "react";
import AllStockList from "../../../components/common/AllStockList";

const getStockData = async () => {
  const res = await fetch(`${process.env.MAIN_API}/stocks/`);
  const stockData = await res.json();
  return stockData;
};

async function Home() {
  const stocks = await getStockData();

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <AllStockList stocksData={stocks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
