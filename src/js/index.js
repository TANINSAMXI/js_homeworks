'use strict'

const inputText = document.getElementById('textField')
const displayDiv = document.getElementById('appear')
displayDiv.style.display = 'none'
document.addEventListener('focusin', () => {
    if (document.activeElement === inputText) {
        displayDiv.style.display = 'flex'
    }
})
document.addEventListener('focusout', () => {
    if (document.activeElement !== inputText) {
        displayDiv.style.display = 'none'
    }
})
