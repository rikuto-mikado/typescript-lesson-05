# Investment Calculator Logic

## Overview

`calculateInvestment` takes investment parameters and returns a year-by-year breakdown of how the investment grows.

## Types

```typescript
type InvestmentData = {
    initialAmount: number;       // Starting investment
    annualContribution: number;  // Amount added each year
    expectedReturn: number;      // Annual return rate (e.g. 0.05 = 5%)
    duration: number;            // Number of years
};

type InvestmentResult = {
    year: string;                // "Year1", "Year2", ...
    totalAmount: number;         // Total value at end of year
    totalContribution: number;   // Cumulative contributions (excluding initial)
    totalInterestEarned: number; // Total interest earned so far
};

type CalculationResult = InvestmentResult[] | string; // string = error message
```

## Validation

Returns an error string early if:
- `initialAmount < 0`
- `duration <= 0`
- `expectedReturn < 0`

## Per-Year Calculation (in order)

```
1. Apply return rate:     total = total * (1 + expectedReturn)
2. Calculate interest:    totalInterestEarned = total - totalContributions - initialAmount
3. Add contribution:      totalContributions += annualContribution
4. Update total:          total += annualContribution
5. Record result:         annualResults.push({ year, totalAmount, totalContribution, totalInterestEarned })
```

**Why this order matters:**
- Interest is calculated **before** adding the new contribution — the contribution added this year starts earning return *next* year.
- `totalInterestEarned` isolates pure growth by subtracting all principal (initial + contributions so far).

## Example

| Input | Value |
|---|---|
| initialAmount | 1,000,000 |
| annualContribution | 100,000 |
| expectedReturn | 0.05 (5%) |
| duration | 3 years |

| Year | Calculation | totalAmount |
|---|---|---|
| Year 1 | 1,000,000 × 1.05 + 100,000 | 1,150,000 |
| Year 2 | 1,150,000 × 1.05 + 100,000 | 1,307,500 |
| Year 3 | 1,307,500 × 1.05 + 100,000 | 1,472,875 |
