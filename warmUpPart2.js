// const startNumber = 20;
// const endNumber = 3;
// const stepNumber = 7;
// var sum = 0;
// var loopCounter = startNumber;

function calculate(startValue, endValue, stepValue) {
    console.log("trace msg: start, end, step", startValue, endValue, stepValue)
    const startNumber = startValue;
    const endNumber = endValue;
    const stepNumber = stepValue;
    var sum = 0;
    var loopCounter = startValue;
    for (; loopCounter >= endNumber; loopCounter -= stepNumber) {
        sum += stepNumber; // mutating a variable means to change it
    }
    return sum;
}
