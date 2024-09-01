'use strict'

//Main
const mainFunction = function (callback) {
    const firstNumber = +prompt('please enter your first number')
    const secondNumber = +prompt('please enter your second number')
    callback(firstNumber, secondNumber)
}

//Callback exponentiation
const exponentiation = function (num1, num2) {
    const answer = num1 ** num2
    alert(`${num1} ^ ${num2} = ${answer}`)
    console.log(`${num1} ^ ${num2} = ${answer}`)
}
mainFunction(exponentiation)

//Callback multiply
const multiply = function (num1, num2) {
    const answer = num1 * num2
    alert(`${num1} * ${num2} = ${answer}`)
    console.log(`${num1} * ${num2} = ${answer}`)
}
mainFunction(multiply)

//Callback division
const division = function (num1, num2) {
    const answer = num1 / num2
    alert(`${num1} / ${num2} = ${answer}`)
    console.log(`${num1} / ${num2} = ${answer}`)
}
mainFunction(division)

//Callback modulo
const modulo = function (num1, num2) {
    const answer = num1 % num2
    alert(`${num1} % ${num2} = ${answer}`)
    console.log(`${num1} % ${num2} = ${answer}`)
}
mainFunction(modulo)
