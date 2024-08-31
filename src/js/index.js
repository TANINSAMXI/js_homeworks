'use strict'

//#1

const onlyNumbers = function (array) {
    let summa = 0
    let divider = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            summa = summa + array[i]
            divider = divider + 1
        }
    }
    return summa / divider
}
const myArray = onlyNumbers([20, 'some', 20, 40, null, 15, 15, '100'])
console.log(myArray)

//#2

const doMath = function (x, sign, y) {
    if (sign === '+') {
        return x + y
    } else if (sign === '-') {
        return x - y
    } else if (sign === '*') {
        return x * y
    } else if (sign === '/') {
        return x / y
    } else if (sign === '%') {
        return x % y
    } else if (sign === '^') {
        return x ** y
    } else {
        return 'wrong symbol'
    }
}
const x = +prompt('enter number x')
const sign = prompt('enter some of symbols +, -, *, /, %, ^')
const y = +prompt('enter number y')
console.log(doMath(x, sign, y))
alert('your answer : ' + doMath(x, sign, y))

//#3

const footballArrays = function () {
    const teams = +prompt('how much teams you want ta add?')
    const teamArr = []
    for (let i = 0; i < teams; i++) {
        const players = +prompt(`how many players in team #${i + 1}?`)
        const playersArr = []
        for (let j = 0; j < players; j++) {
            const names = prompt(
                `enter player's name #${j + 1} for team #${i + 1}`
            )
            playersArr.push(names)
        }
        teamArr.push(playersArr)
    }
    return teamArr
}
console.log(footballArrays())

//#4

const ourFunction = function () {
    const myWord = prompt('please enter your word')
    const toDelete = prompt('enter letters to delete divided by space')
    const spaceLetters = toDelete.split(' ')
    const lettersToDelete = []
    for (let i = 0; i < spaceLetters.length; i++) {
        const singleLetter = spaceLetters[i].trim()
        if (singleLetter) {
            lettersToDelete.push(singleLetter)
        }
    }
    const functionToDelete = function (word, toDelete) {
        const letters = word.split('')
        const newWord = []
        for (let i = 0; i < letters.length; i++) {
            const asLetterToDelete = letters[i]
            if (!toDelete.includes(asLetterToDelete)) {
                newWord.push(asLetterToDelete)
            }
        }
        return newWord.join('')
    }
    console.log(functionToDelete(myWord, lettersToDelete))
    alert(functionToDelete(myWord, lettersToDelete))
}
ourFunction()
