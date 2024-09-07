'use strict'

//#1
const arr = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
]
const positive = (array) => {
    let summa = 0
    let counter = 0
    array.forEach((number) => {
        if (number > 0) {
            summa = summa + number
            counter = counter + 1
        }
    })
    console.log(summa)
    console.log(counter)
}
positive(arr)

//#2
const minimal = (array) => {
    let minimum = array[0]
    let indexOf = 0
    arr.forEach((number, i) => {
        if (number < minimum) {
            minimum = number
            indexOf = i
        }
    })
    console.log(minimum)
    console.log(indexOf)
}
minimal(arr)

//#3
const maximum = (array) => {
    let max = array[0]
    let indexOf = 0
    arr.forEach((number, i) => {
        if (number > maximum) {
            max = number
            indexOf = i
        }
    })
    console.log(max)
    console.log(indexOf)
}
maximum(arr)

//#4
const negative = (array) => {
    let counter = 0
    array.forEach((number) => {
        if (number < 0) counter = counter + 1
    })
    console.log(counter)
}
negative(arr)

//#5
const odd = (array) => {
    let counter = 0
    array.forEach((number) => {
        if (number > 0 && number % 2 !== 0) counter = counter + 1
    })
    console.log(counter)
}
odd(arr)

//#6
const even = (array) => {
    let counter = 0
    array.forEach((number) => {
        if (number > 0 && number % 2 === 0) counter = counter + 1
    })
    console.log(counter)
}
even(arr)

//#7
const evenPositive = (array) => {
    let summa = 0
    array.forEach((number) => {
        if (number > 0 && number % 2 === 0) summa = summa + number
    })
    console.log(summa)
}
evenPositive(arr)

//#8
const oddPositive = (array) => {
    let summa = 0
    array.forEach((number) => {
        if (number > 0 && number % 2 !== 0) summa = summa + number
    })
    console.log(summa)
}
oddPositive(arr)

//#9
const productOf = (array) => {
    let product = 1
    array.forEach((number) => {
        if (number > 0) {
            product = product * number
        }
    })
    console.log(product)
}
productOf(arr)

//#10
const zero = (array) => {
    let max = array[0]
    array.forEach((number) => {
        if (number > max) {
            max = number
        }
    })
    const zeroToArr = array.map((number) => {
        if (number === max) {
            return number
        } else {
            return 0
        }
    })
    console.log(zeroToArr)
}
zero(arr)
