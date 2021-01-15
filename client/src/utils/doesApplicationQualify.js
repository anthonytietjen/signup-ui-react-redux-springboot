
/**
 * 
 * @param {*} data 
 * Return false if any of these criteria are met:
 * - investmentAmount is greater than 1/5th of yearlyIncome
 * - creditScore is less than 600
 * - investmentAmount is greater than 3% of netWorth
 * 
 * Otherwise return true
 */
export const doesApplicationQualify = (data) => {
  const yearlyIncomeRatio = 1 / 5;
  const minimumRequiredCreditScore = 600;
  const netWorthPercentage = .3;

  if (data.investmentAmount > (data.yearlyIncome * yearlyIncomeRatio)) {
    return 1;
  }

  if (data.creditScore < minimumRequiredCreditScore) {
    return 2;
  }

  if(data.investmentAmount > (data.netWorth * netWorthPercentage)){
    return 3;
  }

  return 0;
}