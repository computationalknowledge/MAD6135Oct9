export function calculate(startValue, endValue, stepValue) {
    // console.log("trace msg: start, end, step", startValue, endValue, stepValue)
    const endNumber = endValue;
    const stepNumber = stepValue;
    var sum = 0;
    var loopCounter = startValue;
    for (; loopCounter >= endNumber; loopCounter -= stepNumber) {
        sum += stepNumber; // mutating a variable means to change it
    }
    return sum;
}

for (var i = 0; i < 10; i++) {
    var temp = calculate(20, 3, 4);
}
