'use strict'

//#1
const getFactorial = (num) => {
    let ourFactorial = 1
    const multipliers = []
    for (let i = 1; i <= num; i++) {
        ourFactorial *= i
        multipliers.push(i)
    }
    const operations = `${num}! = ${multipliers.reverse().join(' * ')} = `
    const end1 = operations + ourFactorial
    console.log(end1)
    alert(end1)
    return ourFactorial
}
getFactorial(3)

//#2
const pow = (num, degree) => {
    if (degree === 0) {
        return 1
    }
    return num * pow(num, degree - 1)
}
const outPut = (num, degree) => {
    const recursive = pow(num, degree)
    const end2 = `${num} ^ ${degree} = ${recursive}`
    console.log(end2)
    alert(end2)
}
outPut(4, 3)

//#3

const increment = (a, b) => {
    if (b === 0) {
        return a
    }
    return increment(a + 1, b - 1)
}
const pseudoAddition = (a, b) => {
    return increment(a, b)
}
console.log(pseudoAddition(100, 117))
