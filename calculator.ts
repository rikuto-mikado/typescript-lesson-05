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

// You can also write the type inline like this, but using a named type (InvestmentData) is preferred
// because it avoids duplicating the type definition and makes the code easier to reuse and maintain.
// function caculateInvestment(data: {
//     initialAmount: number;
//     annualContribution: number;
//     expectedReturn: number;
//     duration: number;
// }) {

}

function printResults(result) {

}

const results = caclulateInvestment({
    initialAmount: 0,
    annualContribution: 0,
    expectedReturn: 0,
    duration: 0,
})

printResults(results);