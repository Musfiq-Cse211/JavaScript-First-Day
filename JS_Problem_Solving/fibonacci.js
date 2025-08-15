// 0 1 1 2 3 5 8 13 21 34 55 89, 144.....

// fibo[2] = fibo[2 - 1] + fibo[2 - 2];
// fibo[3] = fibo[3 - 1] + fibo[3 - 2];
// fibo[4] = fibo[4 - 1] + fibo[4 - 2];
// fibo[i] = fibo[i - 1] + fibo[i - 2];

// Intermediate Way --->
var fibo = [0, 1];
for (var i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// Function Way ----> 
function fibonacciCheck(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fiboResult = fibonacciCheck(12);
console.log(fiboResult);

// Recursive way --->
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var RecursiveFiboResult = fibonacci(10);
console.log(RecursiveFiboResult);

//Fibonacci Series Recursive ==>

function fiboNacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var fibo = fiboNacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var finalResult = fiboNacci(15);
console.log(finalResult);