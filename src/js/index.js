'use strict'

const myText = document.getElementById('textField')
const myDiv = document.getElementById('appear')

myDiv.style.display = 'none'
myText.addEventListener('focus', () => {
    myDiv.style.display = 'block'
})

myText.addEventListener('blur', () => {
    myDiv.style.display = 'none'
})
