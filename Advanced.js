// Functional Programming with JS

// Pure Function ---->
// `It Returns the same result if given the same arguments`
// `It does not cause any observable side effects`

function sqr(n) {
    return n*n
}
console.log(sqr(5));
console.log(sqr(5));
console.log(sqr(5));

// Not a Pure Function -->
var num = 160;
function change() {
    num = 250;
}
change();
console.log(num);

// Not a Pure Function -->

var point = {
    a: 60, b:70
}
function printPoint(point) {
    point.a = 350;
    point.b = 450;
    console.log(point);
}
printPoint(point);
console.log(point); // This is side effect because global var value is changed!

// ## First Class Function ---->
// 1. A Function can be stored in a variable.
function add(x, y) {
    return x + y;
}
console.log(add(5, 6));
var sum = add;
console.log(sum(6, 7));

// 2. A Function can be stored in a Array.
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](11, 12));

// 3. A Function can be stored in a Object.
var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(25, 25));

// 4. We can Create Function as Need.
setTimeout(function () {
    console.log('Hi! I\'M \ Muhammad Musfiq');
}, 500);


// Higher Order Function ---->
// 5. We can Pass Function as An Arguments.
// 6. We can Return Functions from Another Function.

function addOne(a, b) {
    return a + b;
}
function manipulate(a, b, func) {
    var c = a + b;
    var d = a - b;

    // function multiply() {
    //     var m = func(a, b);
    //     return c * d * m;
    // }
    //return multiply;

    return function multiply() {
        var m = func(a, b);
        return c * d * m;
    }
}

var multiply = manipulate(5, 6, addOne);
console.log(multiply());

