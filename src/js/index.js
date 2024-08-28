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
