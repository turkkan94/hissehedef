export async function GET(request, { params: { symbol } }) {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol.toUpperCase()}.IS?formatted=false&modules=incomeStatementHistoryQuarterly`
  );

  const incomeData = await res.json();
  const income =
    incomeData.quoteSummary.result[0].incomeStatementHistoryQuarterly
      .incomeStatementHistory;

  return Response.json({
    income,
  });
}
