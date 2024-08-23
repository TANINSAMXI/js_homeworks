'use strict'

const padString = function (string, num, symbol = ' ', rightSide = true) {
    if (typeof string !== 'string') {
        return 'Error!'
    }
    if (typeof num !== 'number') {
        return 'Error!'
    }
    if (typeof symbol !== 'string' || symbol.length !== 1) {
        return 'Error!'
    }
    if (typeof rightSide !== 'boolean') {
        return 'Error!'
    }
    if (string.length >= num) {
        return string.substring(0, num)
    }
    const size = num - string.length
    const count = symbol.repeat(size)

    if (rightSide) {
        return string + count
    } else {
        return count + string
    }
}
console.log(padString('hello', 8, '*'))
console.log(padString('hello', 6, '*', false))
console.log(padString('hello', 2))
console.log(padString('hello', 25, 'o', true))
