// Leap Year Check -->
function leapYear(year) {
    if (year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) {
        console.log('This is Leap Year!');
    }
    else {
        console.log('This is Not a Leap Year!');
}
}
var checkLeapYear = leapYear(2023);
console.log(checkLeapYear);
// Next 10 leap years after 2023: 2024 2028 2032 2036 2040 2044 2048 2052 2056 2060