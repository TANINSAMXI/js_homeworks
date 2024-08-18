'use strict'

//#1

let numbers = 0
for (let i = 10; i <= 20; i++) {
    numbers = numbers + i
    if (i < 20) numbers = numbers + ',' //excludes the comma after the number 20.
}
console.log(numbers)

//#2

for (let i = 10; i <= 20; i++) {
    console.log(`${i} * ${i} = `, i * i)
}

//#3

for (let i = 1; i <= 9; i++) {
    console.log(`7 * ${i} = ${7 * i}`)
}

//#4

let amount = 0
for (let i = 1; i <= 15; i++) {
    amount = amount + i
}
console.log('the sum of integers from 1 to 15 =', amount)

//#5

let multi = 1
for (let i = 15; i <= 35; i++) {
    multi = multi * i
}
console.log('product of integers from 15 to 35 =', multi)

//#6

let mean = 0
for (let i = 1; i <= 500; i++) {
    mean = mean + i
}
console.log('arithmetic average from 1 to 500 =', mean / 500)

//#7

//First variation
let sumOne = 0
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOne = sumOne + i
    }
}
console.log('the sum of even numbers from 30 to 80 =', sumOne)

//Second variation
let sumTwo = 0
for (let i = 30; i <= 80; i = i + 2) {
    sumTwo = sumTwo + i
}
console.log('the sum of even numbers from 30 to 80 =', sumTwo)

//#8

console.groupCollapsed('multiples of 3 from 100 to 200: ↓ ')
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}
console.groupEnd()

//#9 #10 #11

const yourNumber = +prompt('please enter the natural number')
if (yourNumber > 0 && Number.isInteger(yourNumber)) {
    let allDivisors = []
    let evenDivisors = 0
    let sumDivisors = 0

    for (let i = 1; i <= yourNumber; i++) {
        if (yourNumber % i === 0) {
            allDivisors.push(i)
            if (i % 2 === 0) {
                evenDivisors = evenDivisors + 1
                sumDivisors = sumDivisors + i
            }
        }
    }
    console.log('divisors of your positive integer :', allDivisors.join(','))
    console.log('even divisors of your positive integer :', evenDivisors)
    console.log('sum of even divisors :', sumDivisors)
} else {
    console.log(
        '%c "warning!please enter only the positive integers"',
        'color:red;'
    )
}

//#12

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}
