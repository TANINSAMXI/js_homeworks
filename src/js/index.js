'use strict'

const yourNumbers = () => {
    const length = +prompt('enter number of elements of your array')
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(+prompt(`enter some number for your array `))
    }
    console.log(arr)
    return arr
}
const yourArr = yourNumbers()

const increasing = (arr) => {
    arr.sort((a, b) => a - b)
    console.log(arr)
    return arr
}
const newArr = increasing(yourArr)

const deleteNumbers = (arr) => {
    arr.splice(1, 3)
    console.log(arr)
    return arr
}
deleteNumbers(newArr)
