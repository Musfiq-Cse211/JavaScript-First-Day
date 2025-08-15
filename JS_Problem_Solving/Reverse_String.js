
// var statement = 'Hey This is ASUS Laptop and HP Monitor!';
function reverseString(str) {
    var reverse = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = 'Technology Name is ASUS Laptop and HP Monitor!';
var laptopMonitor = reverseString(statement);
console.log(laptopMonitor);
var khacchiKhabo = reverseString('Khacchi Khabo and BakarKhani Khabo!');
console.log(khacchiKhabo);