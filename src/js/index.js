'use strict'
const ourSum = () => {
    let result = 0
    return (number) => {
        result = result + number
        return result
    }
}
const sum = ourSum()
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
console.log(sum(50))
console.log(sum(100))
console.log(sum(1000))
