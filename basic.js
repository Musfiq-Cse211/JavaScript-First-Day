/*var chalerDam = 30;
console.log(chalerDam);

var greetings = "Hi There!";
var num  = 3;
if (num == 3) {
    var greetings = "Hello!";
    console.log(greetings);
}
console.log(greetings);

// swap
var a = 8;
var b = 4;
console.log("Before Swapping : a = ", a, "b = ", b);

var temp = a;
a = b;
b = temp;
console.log("After Swapping : a = ", a, "b = ", b);

// swap 
var p = 13;
var q = 34;
console.log("Before Swapping : p = ", p, "q = ", q);
[p, q] = [q, p];
console.log("After Swapping : p = ", p, "q = ", q);

// 
var talk = `hello i'm muhammad musfiq. this is my javascript problem.`;
console.log(talk.toUpperCase());
console.log(talk.toLowerCase());
console.log(talk.indexOf("musfiq"));
console.log(talk.indexOf("mum")); // when spelling is incorrect !
console.log(talk.lastIndexOf("musfiq"));
console.log(talk.split('')); // Individual Character String!
console.log(talk.split('this'));
console.log(talk.split(' ')); // String!;

var bd = `Bangladesh`;
console.log(bd.indexOf('desh'));

var num1 = 300;
var num2 = '234.56';
num2 = parseInt(num2); // convert to only integer!
num2 = parseFloat(num2);  // covert string to number!
console.log(num1 + num2);

var number1 = 56;
var number2 = 45.5;
number1 = '' + number1; // now 56 is string!
console.log(typeof(number1));

var one = 0.565;
var two = 0.324;
var sum = one + two;
console.log(sum.toFixed(3));

let greetings = "Assalamualakum!";
let num = 9;
if (num == 9) {
    let greetings  = "Walaikumussalam!";
    console.log(greetings);
} 
console.log(greetings);

var greetings1 = "Hi! This is Muhammad!";
var num1 = 9;
if (num1 == 9) {
    var greetings1  = "Hey! This is Musfiq";
    console.log(greetings1);
} 
console.log(greetings1);

let sentence = "Narration : He said \" I ate Today \" ";
console.log(sentence); 

let money = 500;
let busVara = 60;
let bakarKhani = 320;
let morning = true;
if (morning == 1) {
    let result =  money > busVara  && money > bakarKhani ? "BakarKhani Kinbo!" : "BakarKhani Na Kine Misty Kine Chole Asbo!";
    console.log(result); 
} else {
    console.log("Puran Dhaka Jabo Na!"); 
}

let friend = "close";
let loan = 2000;
let loanClear = true;

if (friend!="close") {
    console.log("Sorry I Can't Give The Loan!");   
} else if(friend == "close" && loanClear == true && loan <=2000) {
    console.log("Okay! I Will Give You Loan");
}
else{
    console.log("Sorry I Can't Have Money for Help!");
}

// Company
let proposal  = `The minimum Salary of Entry-Level Junior 
                 Developer in Bangladesh in 2023` ; // Change the value in numerical type
function comment () {
    if (proposal < 30000) {
        console.log("Insult of Programming!");
    } else {
        console.log("Thanks a Lot!");
    }
}

var proposal2 = "The minimum Salary of Entry-Level Junior Developer in Bangladesh in 2023" ; 
function comment () {
    if (proposal2 > 20000) {
        console.log("Company'r Huge Loss!");
    } else {
        console.log("Hire but must have 2+ years of professional experience for an entry level position!");
    }

//const cars = ["Saab", "Volvo", "BMW"];
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
cars[1] = "Toyota";
console.log(typeof(cars));

const fruits = [];
fruits[0] = "Mango";
fruits[1] = "Banana";
fruits[2] = "Orange";
let sizing = fruits.length;
console.log(sizing);
let size = fruits[fruits.length-2];
console.log(size);
let sorting = fruits.sort();
console.log(sorting);

/* Associative Arrays
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.  
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.*/
/* const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     
console.log(person.length); // Will return 0
console.log(person[0]); // Will return undefined

//The new keyword can produce some unexpected results: 
// Create an array with two elements:
const points1 = new Array(40, 100);
console.log(points1);
// Create an array with one element ???
const points2 = new Array(40);  
console.log(points2);
const points = [40];
console.log(points);

// Solution 1: The typeof operator returns object because a JavaScript array is an object.
const fruits4 = ["Banana", "Orange", "Apple"];
let type = typeof fruits4;
console.log(type);
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
let arr = Array.isArray(fruits4);
console.log(arr);
// Solution 2: The instanceof operator returns true if an object is created by a given constructor:
let arr2 = fruits instanceof Array;
console.log(arr2);

let deleting = delete fruits[0];
console.log(deleting);

fruits4.sort();
console.log(fruits4);
fruits4.reverse();
console.log(fruits4);

/* Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.
The flat() method creates a new array with sub-array elements concatenated to a specified depth.*/ 
 /* const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// while loop / do while Loop 
var num = 10;
while(num <=15){
console.log(num);
num++;
}
do {
    console.log(num);
    num++;
}
while(num < 13);
// for loop
var num = [12, 36, 45, 67, 70, 88, 98];

for (var i = 0; i < num.length-1; i++) {
    //var element = num[i];
    console.log(num[i]);  
}
// switch
let day;
switch(new Date().getDate()) {
    case 0:
        day = "Sunday";
        console.log(day);
        break;
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);
        break;
}

// 
var j = 0;
for (;;) {
  if (j > 3) 
  break;
  console.log(j);
  j++;
}
//
var j = 0;
for (; j < 9; j++) {
  console.log(j);
  // more statements
}

// Function
function doubleIt(num){
    var result = num * 3;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var third = doubleIt(500);
console.log([first,second,third]);

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

// Convert Fahrenheit to Celsius: °C = (°F - 32) × 5/9
function toCelsius(farenheit){
    let result = (5/9) * (farenheit - 32);
    return result;
}
let value = "The Temparature is "  + toCelsius(77) + " Degree Celsius!";
console.log(value);

// Object
var student1 = { id: 101, phone:9909, name:"Rajib" };
var student2 = { id: 102, phone:8809, name:"Pavel" };
var nameOne = student1.name;
var phoneNo = student1.phone;
var idNo = student2["id"]
var phoneTwo = student2.phone = 5643; // update phone
console.log(nameOne,phoneNo);
console.log(idNo);
console.log(phoneTwo);
console.log(student2);

// Number 

var n = 1675;
var g = 3.1418;

var h = Number('65.76');
console.log(h);
console.log(Number.parseInt(h));
console.log(Number.parseFloat(h));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(1/0);   // JS Can Hold Infinity Number
console.log(-16/0); // -Infinity
console.log(0/0);   //  NaN -> Not a Number
console.log('tyu' * 55);  // NaN
console.log(0/1);  // Zero

// Null VS Undefined

var abc;
var xyz  = null; // Null is a Special Type Used as a Absence of an Object!
console.log(xyz);
console.log(abc);

// Hexadecimal and Octal Number

var hex = 0xff;  
console.log(hex);

var oct = 0676;
console.log(oct);

// Math
var n = -6.563;
console.log(Math.abs(n));
console.log(Math.floor(n)); //  -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.max(400, 500, 800));
console.log(Math.min(400, 500, 800));
console.log(Math.pow(4, 6));
console.log(Math.sqrt(8));
console.log(Math.random() * 40 + 10);
console.log(Math.E, Math.PI, Math.LOG10E);

// Date 

var date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

console.log(date.getFullYear());
console.log(date.getMonth()); // count to zero
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

var date = new Date();
var today = date.getDay();
console.log(today);

switch(today) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;
    default: 
        console.log("Not a Valid Number");
}
// Using the JavaScript switch statement to get the day count based of a month.

// In this example, we have four cases:
// If the month is 1, 3, 5, 7, 8, 10, or 12, the number of days in a month is 31.
// If the month is 4, 6, 9, or 11, the number of days in that month is 30.
// If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
// If the month is not in the valid range (1-12), the default branch executes and sets the dayCount variable to -1, which indicates the invalid month.

let year = 2023;
let month = 8;
let dayCount;
switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        // leap year 
        if((year % 4 == 0 && !(year % 100 == 0 )) || year % 400 == 0) {
            dayCount = 29;
        }
        else {
            dayCount = 28;
        }
        break;
        default:
            dayCount = -1 // invalid month
}
console.log(dayCount); // 29

// Advance Loop
for (var i = 0; i < 20; i+=5) {   // increment by 5
    console.log((i+1) + " Musfiq");;   
}
// ODD -  i % 2 == 1  EVEN --  i % 2 == 0
for (var i = 1; i <= 20; i++){
    if(i % 2 == 0) {  
        console.log(i);
    }
}
// Summation - 1 + 2 + 3 + 4 + ... + 10;
 var sum = 0;
 for (var i = 1; i <= 10; i++) {
    console.log(sum + " + " + i + " = " + (sum+i)); 
    sum += i;
}
console.log("Result = " + sum);
// Task : Random Number If the random number is 9 then output is winner!
// var rand = Math.floor(Math.random()*10 + 1);
// console.log(rand); 
// Here Always random number will be floating point like : 0.2344 , 0.56343 ;
// So remove this 0 number and floating point then we will use Math.floor(Math.random() * 10 + 1);
// Math.random(); --> Rang: [0 - 0.9999] Not Includes Exactly 1  --> Ans: 0.233 , 0.8999 
// Math.floor(Math.random() * 10); --> Range: [0 - 9] Not Includes Exactly 10 --> Ans: 0,1,4,5,9
// Math.floor(Math.random() * 10 + 1); --> Range: [1 - 10] --> Ans: 1,2,3,4,10
var isRunning = true;
do {
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log("Winner!  Winner!  Winner!");
        isRunning = false; // break;
    } else {
        console.log("You Have Got " + rand);
    }
}
while (isRunning);

/* Task : =>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
*/
/*
var n = 5;
for (var i = 1; i <= n; i++){
    var result = '';
    for (var j = 1; j <=i ; j++){
        result += j + ' ';  // column print
    }
    console.log(result);
} 
// Square Star Pattern
var n = 5;
for(var i = 1; i <= n; i++){
    var string = '';
    for(var j = 1; j <= n; j++ ){
        string += '* ';
    }
    console.log(string);
}
// Continue Statement // Skipping the value in loop

for(var i = 0; i <= 10; i++) {
    if(i == 4 || i == 8 && i % 2 == 0 || i % 5 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// String Literal  (Number to String Convert)
var n = 10;
var str = n;         // var str = n.toString();
console.log(str);    // 10 can't convert as a string! // Output : Number! 
var  str1 = n + ''; // Number + String = String
console.log(str1); // Output : String!

// String Constructor 
var str2 = 'Something!';
var str3 = String('Something!');
console.log(str3);

// Escape Notation 
var strOne = 'This is a \'Escape Notation\'';  
var strTwo= 'This is \nNew Line';
var strThree = 'This is \tTAB';
var strFour = 'This is \\Double BackSlash';
console.log(strOne);
console.log(strTwo);
console.log(strThree);
console.log(strFour);

// String Comparison
var a = 'abc'; // if first character is same then check 2nd Character!
var b = 'bcd';
console.log(a == b, a > b, a < b);
/*JS Uses 'Lexicographic' Order System To Compare to String! 
Lexical Order z,y,x, ... a, Z,Y,X, .. , B,A
*/
/*
console.log('g' > 'G');  // TRUE 
console.log('x' > 'F');  // TRUE
console.log('a' > 'Z');  // TRUE
console.log('v' < 'A');  // FALSE

var x = 'aaaaZ';  // first 4 -> a is same. So JS Compiler check last Character!
var y = 'aaaaz';
console.log(x > y);

console.log('006' == 6); // TRUE
/* WE Know Number + String = String , but here  is tricks only
comparison purpose , comparison only number! so '001' string is 
convert into number 1 then check and return => TRUE */

// TASK : Search Total Length Character by Character! 
var str = 'Some String';
var length = 0;
while(true) {
    if(str.charAt(length) == '') {
        break;
    } else {
        length++;
    }
}
console.log(length);
console.log('This is ShortCut Process to search string!'.length);

// Traverse an Array 
var arr = [6, 3, 7, 2, 7, 22, 56];
for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 5;
    console.log(arr[i]);    
}
// Summation of Array Elements
var sum = 0;
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];  
}
console.log('Summation ' + '= ' + sum);  

// Even Number of Array
for(var i = 0; i < arr.length; i++) {
   if(arr[i] % 2 == 0) {
    console.log(arr[i]);
   } 
}
// Search Data
var arr1 = [3, 5, 6, 7, 12, 33, 56, 77];
var find = 44; // 12 -> found
var isFound = false;
for(var i = 0; i < arr1.length; i++) {
     if(arr1[i] == find) {
        console.log('Data Found at Index ' + i);
        isFound = true;
        break;
     }
}
if(!isFound) {
    console.log('Data Not Found at Index');
}

// 2D-3D-Multi Dimensional Array
var arr = [
    [72, 86, 79, 95],
    [82, 87, 90, 93],
    [94, 88, 78, 99]
]
console.log(arr[0][0]);
console.log(arr[1][3]);
console.log(arr[2][2]);

for(var i = 0; i < arr.length; i++) {
   for(var j = 0; j < arr[i].length; j++) {
    console.log('Element ' + i + ': ' + arr[i][j]);
   }
}

// Task : Array Reverse Manually =>
var arr = [2, 4, 5, 6, 8, 9];
for(var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);
// Array Short Method =>
var arr = [2, 4, 5, 6, 8, 9];
console.log(arr.length);
console.log(arr.reverse());
console.log(arr.fill(0)); // All value fill by Zero
console.log(Array.isArray(arr)) // Is it Array => True

//  Creating a New Array 
var arr1 = [1, 3, 4, 5, 6, 7];
var brr1 = arr1 ;
brr1[0] = 10;
console.log(brr1); // When we brr1 index is changed so , here arr1 array wil be changed. That is problem! 

// Now we have created a clone of arr1 so using Array.From() Method!
var arr2 = [2, 5, 6, 7, 8, 3];
var brr2 = Array.from(arr2);
console.log('This is Old Array of Arr2 : ' + arr2) // This is main array. 
brr2[0] = 20; // when we changed the clone array index. here main array can't change this is facilites of Array.From() Method!
brr2[5] = 50;
console.log('This is New Clone Array of Arr2 : ' + brr2);

// Literal Object Access [ADD,UPDATE,REMOVE, COMPARE]
var point = {
    x: 50,
    y: 35,
    z: 23
}
console.log(point.x);
console.log(point.x + point.z);
console.log(point['y']);  // Array Notation
console.log(point['z']);  // Array Notation

var see = 'x';
console.log(point.see);   // This is String => Undefined
console.log(point[see]);  // Array Notation (When we access varibale of object then using this!)

point.a = 87;
console.log(point);    // Adding A in Object.

var update = 'z';
point[update] = 77;
console.log(point);   // Update Z value in Object.
console.log(point.d);  // Undefined Value in Object.

delete point.a;  // deleting any properties by using DELETE OPERATOR
console.log(point);

/* Comparing Two Object =>
Check every properties in oject. If Every Single properties are same
then 2 objects are same or true return! 
*/
var obj1 = { k: 50, l: 60 };
var obj2 = { k: 50, l: 60 };

if (obj1.k == obj2.k && obj1.l == obj2.l ){
    console.log(true);
} else {
    console.log(false);
}
// Tricks of Object Compare : Object converted into String and Object like an Array! then compare string to string!
console.log(obj1);
console.log(JSON.stringify(obj1) == JSON.stringify(obj2) ); // true 

// Iterate or Traverse Object Properties in JS

var obj = {n: 33, o:76, p:88};
console.log('n' in obj); // 'n' in obj => True
console.log('l' in obj); // False because no 'l' properties in obj.

for (var i in obj) {
    // console.log(i);
    console.log(i + ': ' + obj[i]); // Array Notation (When we access varibale of object then using this!)
}
// Object Built in Methods 

var obj1 = { k: 34, l: 87 };
var obj2 = { m: 55, n: 67 };

console.log(Object.keys(obj1)); // Show All properties of object in Array!
console.log(Object.values(obj2)); //  Show All properties values of object in Array! 
console.log(Object.entries(obj1)); // Show tha properties name + values in Array!

// Create Similar or Clone Object

var obj2 = { m: 55, n: 67 };

var obj3 = Object.assign({}, obj2);
obj2.m = 77;
console.log(obj2);
console.log(obj3); 































