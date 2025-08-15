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