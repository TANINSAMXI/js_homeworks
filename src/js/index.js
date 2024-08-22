'use strict'

const generateKey = function (length, characters) {
    let span = ''
    for (let i = 0; i < length; i++) {
        span = span + characters[Math.floor(Math.random() * characters.length)]
    }
    return span
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const key = generateKey(16, characters)
console.log(key)
