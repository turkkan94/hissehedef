export async function GET(request, { params: { symbol } }) {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=cashflowStatementHistoryQuarterly`
  );

  const cashFlowData = await res.json();
  const cashFlow =
    cashFlowData.quoteSummary.result[0].cashflowStatementHistoryQuarterly
      .cashflowStatements;

  return Response.json({
    cashFlow,
  });
}
