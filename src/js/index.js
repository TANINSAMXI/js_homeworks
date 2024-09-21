'use strict'

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13],
]
const ourFlat = function (arr) {
    if (arguments.length > 1 || !Array.isArray(arr)) {
        throw new Error(
            'Function accepts only 1 argument(array only), too much arguments provided'
        )
    }
    const result = []
    const addItem = (arr2) => {
        for (const item of arr2) {
            if (Array.isArray(item)) {
                addItem(item)
            } else {
                result.push(item)
            }
        }
    }
    addItem(arr)
    return result
}
console.log(ourFlat(complexArray))
console.log(ourFlat(complexArray, [0, 0, 0]))
