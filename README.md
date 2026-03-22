# TypeScript Lesson 05

## What I learned

### `toFixed(n)`
Formats a number to `n` decimal places and returns it as a `string`. `toFixed(0)` rounds to a whole number.

```ts
(1234.567).toFixed(0); // "1235"
(1234.567).toFixed(2); // "1234.57"
```

## What was difficult

### `for...of` vs `for...in`
Easy to mix up, but they do completely different things.

| | `for...of` | `for...in` |
|---|---|---|
| Yields | **values** | **keys / indices** |
| Best for | arrays & iterables | objects |
| Index type | — | `string` |

```ts
const results = [10, 20, 30];

// for...of → gets each value
for (const value of results) {
    console.log(value); // 10, 20, 30
}

// for...in → gets each index as a string
for (const i in results) {
    console.log(i); // "0", "1", "2"
}
```

Use `for...of` when iterating over array elements.

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
