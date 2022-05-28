# Dynamic Programming with typescript

Inspired by the python code demonstrated during this video

- [What Is Dynamic Programming and How To Use It](https://www.youtube.com/watch?v=vYquumk4nWw)

## Getting started

```cmd
npm install

tsc

node dist/index.js
```

## Needs

- [decimal.js](https://mikemcl.github.io/decimal.js/) is used to break ```Number.MAX_VALUE``` limitation that turns the sum into ```Infinity```

```ts
const ableBigNumbers = new Decimal(1000).plus(1000);
//is eq to 
const unableBigNumbers = 1000 + 1000;
```

## Performance comparison

```cmd
fibonatcci_recursive(44).toFixed()

 - Duração: 9.24s

 fibonatcci_memoize(8030,memo).toFixed()

 - Duração: 0.05s

 fibonatcci_bottom_up(10000).toFixed()

 - Duração: 0.03s
 ```

## 3 alternatives of  Fibonacci algorithms

### 1. Recursive and less performant

```ts
function fibonatcci_recursive(n : number) : number {
    if(n > 44){
        throw new Error("Prevenindo sobrecarga no sistema.");
    }

    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonatcci_recursive(n - 1) + fibonatcci_recursive(n - 2);
}
```

### 2. Merging recursion with dynamic array

```ts
//Memoization
const memo : Decimal[] = [];
function fibonatcci_memoize(n : number,memo : Decimal[]) : Decimal {
    if(n > 8030){
        throw new Error("prevenindo Maximum call stack size exceeded.");
    }
    
    if (n === 1 || n === 2) {
        return new Decimal(1);
    }
    if(memo[n] !== undefined){
        return new Decimal(memo[n]);
    }

    memo[n] = new Decimal(fibonatcci_memoize(n - 1,memo)).plus(fibonatcci_memoize(n - 2,memo));
    return memo[n];
}
```

### 3. Dynamic array without recursion

```ts
function fibonatcci_bottom_up(n : number) : Decimal {
    const memo : Decimal[] = [];
    memo[1] = new Decimal(1);
    memo[2] = new Decimal(1);
    for(let i = 3; i <= n; i++){
        memo[i] = new Decimal(memo[i -1]).plus(memo[i -2]);
    }
    return memo[n];
}
```
