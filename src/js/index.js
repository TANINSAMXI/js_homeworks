'use strict'

const IMAGE_DIRECTORY = './images'
const IMAGE_EXTENSION = '.jpg'

// Function to add an HTML element to a parent element
const appendHTMLElement = (parentElement = null, element = null) => {
    if (!parentElement || !element) return
    parentElement.appendChild(element)
}
const randomNumber = () => {
    const number = Math.floor(Math.random() * 9) + 1
    return Math.floor(number)
}
const createImg = (imageName) => {
    const imgElement = document.createElement('img')
    const imagePath = `${IMAGE_DIRECTORY}/${imageName}${IMAGE_EXTENSION}`
    imgElement.src = imagePath
    imgElement.alt = imagePath
    imgElement.title = imagePath
    return imgElement
}
const randomImageElement = createImg(randomNumber())
appendHTMLElement(document.body, randomImageElement)
