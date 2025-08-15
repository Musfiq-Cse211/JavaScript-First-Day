// Factorial
// 6! = 1*2*3*4*5*6 => 720

function checkFactorial(n) {
    var fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var n = 6;
var result = checkFactorial(n);
console.log(`${n}! : ${result}`);

// Using While loop
function newFactorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var resultFact = newFactorial(8);
console.log('8! :', resultFact);

// Recursive Function
//for (var i = 10; i >= 1; i--) { }
// var i = 0;
// while(i>=) { i--; }

// 0! = 1;
// 2! = 1 * 2;
// 3! = 1 * 2 * 3;
// 4! = 3! * 4;
// 5! = (5-1)! * 5;
// n! = (n-1)! * n;
function factorialCheck(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorialCheck(n - 1) 
    }
}
var newResult = factorialCheck(10);
console.log(newResult);