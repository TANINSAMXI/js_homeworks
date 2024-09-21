'use strict'

const pet = {
    petName: 'Marko',
    petSpecies: 'cat',
}
const getPetInform = function () {
    return `${this.petSpecies} ${this.petName}`
}
const ourApply = function (func, context, ...args) {
    let result = null
    context.func = func
    result = context.func(...args)
    delete context.func
    return result
}
const ourBind = (func = null, context = undefined, args = []) => {
    if (!func) return undefined
    return function () {
        return ourApply(func, context, ...args)
    }
}
const bindPetInform = ourBind(getPetInform, pet)
console.log(bindPetInform)
console.log(bindPetInform())
