'use strict'

const creatingElements = () => {
    const inputText = document.createElement('input')
    inputText.id = 'textField'
    inputText.type = 'text'
    inputText.placeholder = 'click here to focus on me!'

    const displayDiv = document.createElement('div')
    displayDiv.id = 'appear'
    displayDiv.style.display = 'none'

    const img = document.createElement('img')
    img.src = 'https://m.media-amazon.com/images/I/81xteigXbwL._AC_SX679_.jpg'
    img.alt = 'image_link'
    displayDiv.appendChild(img)

    document.body.appendChild(inputText)
    document.body.appendChild(displayDiv)
}

const addEventListeners = (inputText, displayDiv) => {
    inputText.addEventListener('focusin', () => {
        displayDiv.style.display = 'block'
    })
    inputText.addEventListener('focusout', () => {
        displayDiv.style.display = 'none'
    })
}

creatingElements()
const getInputText = document.getElementById('textField')
const getDisplayDiv = document.getElementById('appear')
addEventListeners(getInputText, getDisplayDiv)
