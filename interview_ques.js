// Ques - 01
let x = '{ "b": 1, "c" : 2 }';
let y = JSON.parse(x);
console.log(typeof y); // object

// Ques - 02 
let a = 0.1 + 0.2;
let b = 0.3;
console.log(a == b); // false

// Ques - 03 
let c = false;
let d = '0';
let e = 0;

console.log(c == d); // true 
console.log(c == e); // true

// Ques - 04
let z = [];
console.log(Boolean(z)); // true : empty array is truthy value also non-empty array is truthy when coerced to a Boolean;

// Ques - 05
let one = '5';
let two = 2;
console.log(one + two); // 52
console.log(one - two); // 3

// Ques - 06
let m = [];
let n = [];
let k = m + n;
console.log(typeof k); // string (Called Implicit type coercion)

// Ques - 07
let p = true;
let r = false;
let l = p + r && p * r; // 1 + 0 && 1 * 0 // logical and --> 1 AND 0 ==> 0
console.log(l); // 0

// Ques - 08
function foo(a, b) {
    console.log(arguments[1]);
}
foo(3); // arguments[0] -> 3 but arguments[1] -> undefined

// Ques - 09
let q = 1;
let s = '1'; // converted as number
console.log(++q, ++s); // 2 2

// Ques - 10
let u = 'b';
let v = 'a';
console.log(u + v + + v + v); // baNaNa
// The expression +v coerces the value of v into a number. Since v is the string "a", which can't be coerced into a number, the result of +v is NaN. Finally the expression NaN + v concatenates the string "NaN" with the value of y, which is "a".