// Number
var n1 = 50;
var n2 = 23.983;
var n3 = 1000000;
console.log(parseInt(n2));
console.log(parseFloat(n2));
var num1 = n2.toFixed();
var num2 = n2.toExponential(2);
console.log(num1);
console.log(num2);
var localString = n3.toLocaleString("bn-BD");
var localString1 = n3.toLocaleString("ar-SA");
console.log(localString);
console.log(localString1);
// toPrecision() formats a number to a specified length --> 
var num3 = n2.toPrecision(3);


let a = Math.abs(-12.56);
let c = Math.abs(null);  // Zero
let b = Math.abs("String"); // NAN
let d = Math.abs(6 / 3); // 2
console.log(a, c, b, d);

// Math.fround() Method ---> 
console.log("Math.fround() returns the nearest 32-bit single precision float representation of a number:");
let f1 = Math.fround(5.60);
let f2 = Math.fround(5.50);
let f3 = Math.fround(5.40);
let f4 = Math.fround(5.59);
let f5 = Math.fround(5.39);
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(f5);

// Associative Arrays --> These are indexed by Name not a  number!
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     
console.log(person.length); // Will return 0
console.log(person[0]); // Will return undefined

// Diff. between Arrays[]  and new array() ;
const human = ["Abul"];
console.log(human);
let newHuman = new Array("Abul");
console.log(newHuman); // Cannot Defined Only one elements! // Undefined Result;

// Solution 1: The typeof operator returns object because a JavaScript array is an object.
const fruits4 = ["Banana", "Orange", "Apple"];
let type = typeof fruits4;
console.log(type);
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
let arr = Array.isArray(fruits4);
console.log(arr);
// Solution 2: The instanceof operator returns true if an object is created by a given constructor:
let arr2 = fruits4 instanceof Array;
console.log(arr2);


/* Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.
The flat() method creates a new array with sub-array elements concatenated to a specified depth.*/ 
const myArr = [["Abul", "Kabul", "Jabul"], ["Hello", "Hi", "There"], ["This", "is" , "Riyad"]];
console.log(myArr);
console.log(myArr.flat());

// Convert Fahrenheit to Celsius: °C = (°F - 32) × 5/9
// Convert Celsius to Fahrenheit: °F = °C × (9/5) + 32

// function toFahrenheit(celsius) {
//     let result = celsius * (9 / 5) + 32;
//     return result;
// }
// var one = toFahrenheit(28);
// var two = toFahrenheit(35);
// var three = toFahrenheit(-18);
// Multiple Value pass and show in array --> 
//console.log([one, two, three])

// Kelvin to Fahrenheit Formula : °F = (K − 273.15) × 1.8 + 32 or °F = (K − 273.15) × 9/5 + 32.
function toFahrenheit(celsius) {
    var result1 = celsius * (9 / 5) + 32;
    return result1;
    function toCelsius(fahrenheit) {
        var result2 = (fahrenheit - 32) * 5 / 9;
        return result2;
    }
    console.log(toCelsius(27));
}
console.log(toFahrenheit(30));


function kelvinToFahrenheit(Kelvin) {
    const output = (Kelvin - 273.15) * (9 / 5) + 32;
    return output;
}
console.log(kelvinToFahrenheit(300));


console.log(Math.floor(Math.random() * 40 + 1));

for (var i = 0; i < 20; i+=5) {   // increment by 5
    console.log((i+1) + " Musfiq");;   
}