function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 1 && mobile > 1 && laptop >= 1) {
        return (watch * 50) + (mobile * 100) + (laptop * 500);
    } else {
        return "Input can not be Zero or, Negative.";
    }
}
console.log(budgetCalculator(5, 2, 1), ' TK');