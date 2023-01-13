import React from "react";

const getPrice = async (symbol) => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=price%2CsummaryDetail%2CfinancialData`
  );
  const stock = await res.json();
  return stock;
};

async function Home({ params: { symbol } }) {
  const stock = await getPrice(symbol);
  console.log(stock);
  return <div className="page-content">Home</div>;
}

export default Home;
