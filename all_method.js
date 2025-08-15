//Array.slice(start,end) Method -->
var arr1 = ['Jamal', 'Kamal', 'Balam', 'Palam', 'Salam'];
console.log(arr1.slice(2, 5)); // [ 'Balam', 'Palam', 'Salam' ]

var num = [1, 3, 4, 5, 6, 7, 9, 4];
console.log(num.slice(3, 7));  // [ 5, 6, 7, 9 ]

var num1 = [1, 2, 3, 4, 5];
console.log(num1.slice(-2, 4)); // [4]

var num2 = [1, 2, 3, 4, 5];
console.log(num2.slice(-1, 3)); // [] / Empty

let text = "Apple, Banana, Mango";
console.log(text.slice(7));  // Start 7 to end!
console.log(text.slice(-13));  // [ Banana, Mango ]

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Dates'];
console.log(fruits.slice(-2, -1)); // ['Mango']
console.log(fruits.slice(0, 4));  //  ['Banana', 'Orange', 'Lemon', 'Apple']

// Array.Splice(index position, how many removed, new added) ;

var array = [1, 2, 3, 4, 5];
console.log(array.splice(1, 2, 10, 12, 13, 19));
// 2,3 remove then add array : [1, 10, 12, 13, 19, 4, 5]

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

// Join() 
var a = ['Sanjay', 'Aman', 'Rehman', 'Sunny'];
var b = ['Rahinul', 'Zahirul', 'Mominul'];
console.log(a.concat(b));
console.log(b.join('-')); // Rahinul-Zahirul-Mominul

// SubString(start, end) --> this cann't accept negative index! and also is a similar to Slice();
// SubStr(start,length);

let str = 'Apple, Banana, Mango';
console.log(str.substring(7,13)); // Banana
console.log(str.substr(7, 13));  // Banana, Mango

// Replace(Who, which)  --> this can't change the main string!
// and this can only replace the first match and Case - Sensitive!

var text1 = 'I like Basic JS and Advanced JS';
var new1 = text1.replace('JS', 'React-JS')
console.log(new1); //  I like Basic React-JS and Advanced JS
console.log(text1);

// Trim() --> Removes the both sides of a string's white spaces!

var text2 = '   This  is  White  Space!    '; // only both sides not middle space!
console.log(text2.trim());

// Pad Start(position, fill by any number)

var text3 = '7';
console.log(text3.padStart(4, 0));   // 0007
console.log(text3.padStart(5, 2));  //  22227
console.log(text3.padEnd(4, 0));   //   7000
console.log(text3.padEnd(5, 2));  //    72222

//Extracting String Character : charAt(position);, codeAt(position); , property Access[]

var text4 = 'Muhammad Musfiq';
console.log(text4.charAt(0));       // M
console.log(text4.charAt(8));      //  space
console.log(text4.charCodeAt(0)); //   77






