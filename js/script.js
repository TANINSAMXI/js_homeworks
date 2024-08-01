'use strict';


const firstNumber = Number(prompt("please enter the first number:"));
const secondNumber = Number(prompt("please enter the second number:"));

//finding the sum
const addition = firstNumber + secondNumber;
console.log(`result: ${firstNumber} + ${secondNumber} = ${addition}`);

//finding the difference
const subtraction = firstNumber - secondNumber;
console.log(`result: ${firstNumber} - ${secondNumber} = ${subtraction}`);

//finding the product
const multiplication = firstNumber * secondNumber;
console.log(`result: ${firstNumber} * ${secondNumber} = ${multiplication}`);

//finding the quotient
if (secondNumber !== 0) {
    const division = firstNumber / secondNumber;
    console.log(`result: ${firstNumber} / ${secondNumber} = ${division}`);
}
else {
    console.log("error: cannot divide by zero!");
}