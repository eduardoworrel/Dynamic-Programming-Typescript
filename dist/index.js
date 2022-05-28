"use strict";
exports.__esModule = true;
var decimal_js_1 = require("decimal.js");
var FirstTimeToCount = new Date();
var timeToCount = FirstTimeToCount;
var duration = function () {
    var diferenceInSeconds = (Math.abs((new Date().getTime()) / 1000 - Math.abs(timeToCount.getTime()) / 1000));
    timeToCount = new Date();
    if (diferenceInSeconds > 60) {
        return diferenceInSeconds / 60 + "m";
    }
    return diferenceInSeconds.toFixed(2) + "s";
};
function fibonatcci_recursive(n) {
    if (n > 44) {
        throw new Error("Prevenindo sobrecarga no sistema.");
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonatcci_recursive(n - 1) + fibonatcci_recursive(n - 2);
}
var memo = [];
function fibonatcci_memoize(n, memo) {
    if (n > 8030) {
        throw new Error("prevenindo Maximum call stack size exceeded.");
    }
    if (n === 1 || n === 2) {
        return new decimal_js_1.Decimal(1);
    }
    if (memo[n] !== undefined) {
        return new decimal_js_1.Decimal(memo[n]);
    }
    memo[n] = new decimal_js_1.Decimal(fibonatcci_memoize(n - 1, memo)).plus(fibonatcci_memoize(n - 2, memo));
    return memo[n];
}
function fibonatcci_bottom_up(n) {
    var memo = [];
    memo[1] = new decimal_js_1.Decimal(1);
    memo[2] = new decimal_js_1.Decimal(1);
    for (var i = 3; i <= n; i++) {
        memo[i] = new decimal_js_1.Decimal(memo[i - 1]).plus(memo[i - 2]);
    }
    return memo[n];
}
console.log('\nfibonatcci_recursive(44).toFixed()');
fibonatcci_recursive(44).toFixed();
console.log("\n - Duração: " + duration());
console.log('\n fibonatcci_memoize(8030,memo).toFixed()');
fibonatcci_memoize(8030, memo).toFixed();
console.log("\n - Duração: " + duration());
console.log('\n fibonatcci_bottom_up(10000).toFixed()');
fibonatcci_bottom_up(10000).toFixed();
console.log("\n - Duração: " + duration());
