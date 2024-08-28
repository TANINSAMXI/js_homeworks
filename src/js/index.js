'use strict'

const removeElement = function (array, item) {
    const el = array.indexOf(item)
    array.splice(el, 1)
    return array
}

const array = [1, 2, 3, 4, 5, 6, 7]
removeElement(array, 5)
console.log(array)
