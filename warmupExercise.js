const startNumber = 100;
const endNumber = 3;
const stepNumber = 7;
var sum = 0;
var loopCounter = startNumber;

for (; loopCounter >= 3; loopCounter -= stepNumber) {
    sum += stepNumber;
}

console.log("sum is ", sum);
