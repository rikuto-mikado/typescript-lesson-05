// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    if (initialAmount < 0) {
        return 'Initial Investment amount must be at least zero'
    }

    if (duration <= 0) {
        return 'No vaild amount of years provided'
    }

    // 0% return is valid (no growth, but calculation still works), so only reject negative values
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero'
    }

    let total = initialAmount;
    
}


// You can also write the type inline like this, but using a named type (InvestmentData) is preferred
// because it avoids duplicating the type definition and makes the code easier to reuse and maintain.
// function caculateInvestment(data: {
//     initialAmount: number;
//     annualContribution: number;
//     expectedReturn: number;
//     duration: number;
// }) {

// }

function printResult(result) {

}

const results = calculateInvestment()

printResults(results);