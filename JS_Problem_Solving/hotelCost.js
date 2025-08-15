function hotelCost(days) {
    if (days > 0 && days <= 10) {
        return days * 100;
    }
    else if (days > 10 && days <= 20) {
        let firstPart = 10 * 100;
        let remainingDays = days - 10;
        let secondPart = remainingDays * 80;
        return firstPart + secondPart;
    }
    else if (days > 20) {
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remainingDays = days - 20;
        let thirdPart = remainingDays * 50;
        return firstPart + secondPart + thirdPart;
    }
    else {
        return "Invalid Input";
    }
}
console.log(hotelCost(30) + ' TK');