'use strict'

const insertWordInto = (txt) => {
    const wordPosition = []
    const stringParameter = txt.split(' ')
    for (let i = 0; i <= stringParameter.length; i++) {
        const newTxt =
            stringParameter.slice(0, i).join(' ') +
            ' {word} ' +
            stringParameter.slice(i).join(' ')
        wordPosition.push(newTxt)
    }
    return (word) => {
        if (wordPosition.length === 0) {
            return txt
        }
        let result = wordPosition.shift()
        result = result.replace('{word}', ' ' + word + ' ')
        wordPosition.push(result)
        return result.trim()
    }
}
const insert = insertWordInto('hello world')
const result = insert('Odesa')
console.log(result)
const secondResult = insert('Odesa')
console.log(secondResult)
const thirdResult = insert('Odesa')
console.log(thirdResult)
const fourthResult = insert('Odesa')
console.log(fourthResult)
const fifthResult = insert('Odesa')
console.log(fifthResult)
const sixthResult = insert('Odesa')
console.log(sixthResult)
const seventhResult = insert('Odesa')
console.log(seventhResult)
