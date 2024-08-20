'use strict'

//#1

let numbers = 0
for (let i = 20; i <= 30; i = i + 0.5) {
    numbers = numbers + i + ' '
}
console.log(numbers)

//#2

const exchange = 27
for (let i = 10; i <= 100; i = i + 10) {
    const rate = exchange * i
    console.log(`${i} USD = ${rate} UAH`)
}

//#3

const numberN = +prompt('please enter your integer number :')
if (Number.isInteger(numberN) && numberN > 0) {
    for (let i = 1; i <= 100; i++) {
        if (i * i > numberN) {
            break
        }
        console.log(i)
    }
} else {
    console.log('%c warning!please enter only integer numbers! ', 'color:red')
}

//#4

let prime = +prompt('please enter your integer number :')
if (isNaN(prime) || !Number.isInteger(prime)) {
    console.log('%c warning!please enter only integer numbers! ', 'color:red')
} else if (prime <= 1) {
    console.log('%c too bad!your number is not prime! ', 'color:yellow')
} else if (prime === 2 || prime === 3) {
    console.log(' congratulations!your number is prime! ')
} else if (prime % 2 === 0 || prime % 3 === 0) {
    console.log('%c too bad!your number is not prime! ', 'color:yellow')
} else {
    let i
    for (i = 5; i * i <= prime; i += 6) {
        if (prime % i === 0 || prime % (i + 2) === 0) {
            console.log('%c too bad!your number is not prime! ', 'color:yellow')
            break
        }
    }
    if (i * i > prime) {
        console.log(' congratulations!your number is prime! ')
    }
}

//#5

let maybeThree = prompt('please enter your number :')
if (isNaN(maybeThree) || maybeThree <= 0) {
    console.log('%c warning!please enter only positive numbers!', 'color:red')
} else {
    for (; maybeThree > 1; maybeThree = maybeThree / 3)
        if (maybeThree % 3) break
    if (maybeThree === 1) {
        console.log(' well done!your number is 3 raised in some power!')
    } else {
        console.log(
            '%c oh no!your number is not 3 raised in some power!',
            'color:yellow'
        )
    }
}
