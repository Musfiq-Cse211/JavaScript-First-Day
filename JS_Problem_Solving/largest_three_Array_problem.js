
// program to find the largest among three numbers

// const n1 = parseFloat(prompt('Enter 1st Number: '));
// const n2 = parseFloat(prompt('Enter 2nd Number: '));
// const n3 = parseFloat(prompt('Enter 3rd Number: '));


// const n1 = 56;
// const n2 = 41;
// const n3 = 83;
// let largest;

// if (n1 >= n2 && n1 >= n3) {
//     largest = n1;
// }
// else if (n2 >= n1 && n2 >= n3) {
//     largest = n2;
// }
// else {
//     largest = n3;
// }
// console.log('Largest Value of Three Numbers: ', largest);

function checkLargestNumbers(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        return n2;
    }
    else {
        return n3;
    }
}
var findLargest = checkLargestNumbers(56, 76, 21);
console.log(findLargest);

// MAX function -->
const n1 = 56;
const n2 = 41;
const n3 = 83;
const largest = Math.max(n1, n2, n3);
console.log(largest);

// Array Max
var marks = [23, 45, 67, 89, 32, 12, 99];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
} console.log('Highest Value : ', max);

//Array Summation 
var numbers = [23, 45, 67, 89, 32, 12, 99];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
}
console.log('Total Number : ', sum);

// Array Sum Function

function totalSummation(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
    }
    return sum;
}
var numbers = [23, 45, 67, 89, 32, 12, 99];
var arraySumResult = totalSummation(numbers);
console.log('Total Summation Number of Array: ', arraySumResult);
var newTotalArrayResult = totalSummation([155, 678, 123, 311, 187, 299]);
console.log('New Final Summation of Array', newTotalArrayResult);