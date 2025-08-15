// Convert Fahrenheit to Celsius: °C = (°F - 32) × 5/9
// Convert Celsius to Fahrenheit: °F = °C × (9/5) + 32

function toFahrenheit(celsius) {
    let result = celsius * (9 / 5) + 32;
    return result;
}
var one = toFahrenheit(28);
var two = toFahrenheit(35);
var three = toFahrenheit(-18);

// Multiple Value pass and show in array --> 
console.log([one, two, three])