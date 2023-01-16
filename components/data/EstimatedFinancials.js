const estimatedFinancials = (
  period,
  stockIncomeQuarterly,
  stockBalanceQuarterly
) => {
  if (period == 1) {
    let incomeYearly = stockIncomeQuarterly[0].netIncome.raw * 4;
    let EPS = incomeYearly / stockBalanceQuarterly[0].commonStock.raw;
    return EPS;
  } else if (period == 2) {
    let incomeYearly =
      ((stockIncomeQuarterly[0].netIncome.raw +
        stockIncomeQuarterly[1].netIncome.raw) /
        2) *
      4;
    let EPS = incomeYearly / stockBalanceQuarterly[0].commonStock.raw;
    return EPS;
  } else if (period == 3) {
    let incomeYearly =
      ((stockIncomeQuarterly[0].netIncome.raw +
        stockIncomeQuarterly[1].netIncome.raw +
        stockIncomeQuarterly[2].netIncome.raw) /
        3) *
      4;
    let EPS = incomeYearly / stockBalanceQuarterly[0].commonStock.raw;
    return EPS;
  } else if (period == 4) {
    let incomeYearly =
      stockIncomeQuarterly[0].netIncome.raw +
      stockIncomeQuarterly[1].netIncome.raw +
      stockIncomeQuarterly[2].netIncome.raw +
      stockIncomeQuarterly[3].netIncome.raw;

    let EPS = incomeYearly / stockBalanceQuarterly[0].commonStock.raw;
    return EPS;
  } else {
    console.log("bu bir hata");
  }
};

export default estimatedFinancials;
