# TypeScript Lesson 05

## What I learned

## What was difficult

## Memo

### Named types vs inline types
You can define a function parameter type inline or as a named type. Named types are preferred.

```ts
// inline — works, but not reusable
function calculate(data: { initialAmount: number; duration: number }) {}

// named type — preferred: reusable and easier to maintain
type InvestmentData = { initialAmount: number; duration: number }
function calculate(data: InvestmentData) {}
```

### Union types for flexible return values
Use `|` to allow a function to return multiple types (e.g., a result or an error string).

```ts
type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    if (data.initialAmount < 0) return 'Invalid amount'; // string
    return []; // InvestmentResult[]
}
```

### Return type must match — or TypeScript will error
If the return type annotation is `InvestmentResult` but you return a `string`, TypeScript throws an error.
The fix is to use a union type like `InvestmentResult[] | string`.

### Function must always return a value
If a function has a non-`undefined` return type, every code path must return something.
A function body that ends without a `return` causes a TypeScript error (`2366`).
