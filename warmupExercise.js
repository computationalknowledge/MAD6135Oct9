const startNumber = 20;
const endNumber = 3;
const stepNumber = 7;
var sum = 0;
var loopCounter = startNumber;

function calculate() {
    for (; loopCounter >= endNumber; loopCounter -= stepNumber) {
        sum += stepNumber; // mutating a variable means to change it
    }
    return sum;
}

console.log("sum is ", calculate());
console.log("sum is ", sum);
