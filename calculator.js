"use strict";
// data:
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial Investment amount must be at least zero';
    }
    if (duration <= 0) {
        return 'No vaild amount of years provided';
    }
    // 0% return is valid (no growth, but calculation still works), so only reject negative values
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    // For each year, apply the expected return rate to the current total,
    // calculate the interest earned so far, add the annual contribution,
    // and record the year's result (year label, total amount, contributions, interest earned).
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year${i + 1}`,
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContribution: totalContributions,
        });
    }
    return annualResults;
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
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        // toFixed(0) rounds to a whole number and returns a string
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`-----------------`);
    }
}
// Adding ": InvestmentData" works the same as ": number" or ": string" — it tells TypeScript
// what type this variable must be. Without it, TypeScript infers the type from the object literal,
// so missing fields won't cause an error here. With the annotation, TypeScript catches errors
// at the point of definition, not later when the value is passed to a function.
const InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(InvestmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map