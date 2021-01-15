import { doesApplicationQualify } from './doesApplicationQualify'

describe("doesApplicationQualify", () => {
  it("Should fail if investment amount is greater than 1/5th of yearlyIncome", () => {
    const data = {
      investmentAmount: 200,
      netWorth: 0,
      yearlyIncome: 100,
      creditScore: 0
    }
    const code = doesApplicationQualify(data);
    expect(code).toBe(1)
  })

  it("Should fail if credit score is less than 600", () => {
    const data = {
      investmentAmount: 0,
      netWorth: 0,
      yearlyIncome: 0,
      creditScore: 500
    }
    const code = doesApplicationQualify(data);
    expect(code).toBe(2)
  })

  it("Should fail if investment amount is greater than 3% of netWorth", () => {
    const data = {
      investmentAmount: 50,
      netWorth: 100,
      yearlyIncome: 500,
      creditScore: 700
    }
    const code = doesApplicationQualify(data);
    expect(code).toBe(3)
  })

  it("Should fail if investment amount is greater than 9,000,000", () => {
    const data = {
      investmentAmount: 9000001,
      netWorth: 50000000,
      yearlyIncome: 50000000,
      creditScore: 700
    }
    const code = doesApplicationQualify(data);
    expect(code).toBe(4)
  })

  it("Should succeed", () => {
    const data = {
      investmentAmount: 5,
      netWorth: 100,
      yearlyIncome: 500,
      creditScore: 700
    }
    const code = doesApplicationQualify(data);
    expect(code).toBe(0)
  })
})