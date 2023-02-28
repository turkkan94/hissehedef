export async function GET(request, { params: { symbol } }) {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=balanceSheetHistoryQuarterly`
  );

  const balanceData = await res.json();
  const balance =
    balanceData.quoteSummary.result[0].balanceSheetHistoryQuarterly
      .balanceSheetStatements;

  return Response.json({
    balance,
  });
}
