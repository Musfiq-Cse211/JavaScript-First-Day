// function addSubMulDiv() {
//     var a = 10, b = 20;
//     var add = a + b;
//     var sub = b - a;
//     var mul = a * b;
//     var div = a / b;
//     console.log('Add : ' + add + ' Sub : ' + sub + ' Mul : ' + mul + ' Div : ' + div);
// }
// for (var i = 1; i <= 3; i++) {
//     addSubMulDiv();
// }

// Parameter Pass & Argument Pass
function addSubMulDiv(a, b) { 
    //var a = 10, b = 20;
    var add = a + b;
    var sub = b - a;
    var mul = a * b;
    var div = a / b;
    console.log('Add : ' + add + ' Sub : ' + sub + ' Mul : ' + mul + ' Div : ' + div);
}
for (var i = 1; i <= 3; i++) {
    addSubMulDiv(10 , 20);
}
// Task : Manually Summation of Array 
var arr1 = [1, 3, 4];
var arr2 = [3, 5, 6];
var arr3 = [6, 7, 9];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}
var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
    sum3 += arr3[i];
}
// Assignment : Now Implement this code using function

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
    console.log(sum);  
}
sumOfArray([10, 40, 60]); // new array value
sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

// Firstly Parameter is passing in function. (variable pass)
// 2ndly Argument pass means function call. (real data call)
// Argument Object in JS
function test(a, b, c) {
    // console.log(arguments); // this is looks like object or array!
    // console.log(JSON.stringify(arguments));
    // console.log(typeof a);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
//test();
test(10, 20, 30);
// Using Argument => we can passing new argument values in function without declearing Parameter passing!
// this is looks like object or array!
// using this arguments we can any value passing in the function there is no restriction! and can't declearing parameter!

/* 
addAll(5, 7, 8);
addAll(2, 4, 5, 6, 7, 8, 9, 1);

var a = addAll(5, 7, 8);
var b = addAll(2, 4, 5, 6, 7, 8, 9, 1);
console.log(a, b); // Result : undefined undefined
*/

// Return Statement

/* without return  we can't any result value stored in the variable 
like this example! so using First Return then we can store any result value in the variable!  */

function addAll() {  // Processing Unit
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum; // this is the output section!
}
var result1 = addAll(5, 7, 8); // 20
console.log(result1);

function person(name, email) {
    return {
        name: name,
        email: email
    }
    console.log('Hello!'); // can't access or run! for return!
}
var personOne = person('Musfiq', 'musfiq.cse.green@gmail.com');
console.log(personOne);

// Function Expression
// when we store the function in a variable that is called Function Expression! 
var add1 = function (a, b) {
    return a + b; 
}
add1(5, 6);
var add2 = add1; 
console.log(add2(10,50));
// Here, variable name is a Function name! then call the ADD Variable as  a argument!
// When we can't assign Function Name then that is called Annonymous Function!

setTimeout(function () {
    console.log('I Will Call After Five Second!');
}, 5000)

// Inner Function 
// Task : 

function something(greetins , name) {
    function getFirstName() {
        if (name) {
            // return name.split(' ')[1];
            return name.slice(0, 8);
        }
        else {
            return ''
        }

    }
    var message = greetins + ' ' + getFirstName();
    console.log(message);
}
something('Assalamualaikum!', 'Muhammad Musfiq');

// Function Scoping
// Global Scope // Local Scope

var a = 'ms'; // Global Scope

function x() {
   var a = 30;            // when a=30 & a=50 is hide then function goes to upper bound value like globally scope var a = 'ms';
    function y() { 
        var a = 50;       // When this scope value is hide. then y() goes to upper order/parent access. then parent/upper value a = 50;
        console.log(a);  // local scope
    }
    console.log(a);     // when we run this code then answer: ms and when update the var a = 30; then answer : 30;
    y();
}
x(); 
 
// Task :

function test(n) {
    function a() {
        return n % 3 == 0;
    }
    function b() {
        return n % 5 == 0;
    }
    if (a() && b()) {
        console.log(n + ' is divisible by 3');
    } else {
        console.log(n + ' Not a Valid Number!');
    }
}
test(15);
test(35);
test(50);
