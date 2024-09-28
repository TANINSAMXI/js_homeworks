'use strict'

const IMG_FOLDER = './images'
const IMG_EXT = '.jpg'

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)
}

const getRandomNumber = () => {
    const num = Math.floor(Math.random() * 10)
    if (num === 0) return 1
    return num
}

const generateImg = (imgName) => {
    const img = document.createElement('img')
    img.src = `${IMG_FOLDER}/${imgName + IMG_EXT}`
    img.alt = `${IMG_FOLDER}/${imgName + IMG_EXT}`
    img.title = `${IMG_FOLDER}/${imgName + IMG_EXT}`
    return img
}

const imgToAppend = generateImg(getRandomNumber())

appendHTMLElement(document.body, imgToAppend)

// const nineJpg = [
//     '1.jpg',
//     '2.jpg',
//     '3.jpg',
//     '4.jpg',
//     '5.jpg',
//     '6.jpg',
//     '7.jpg',
//     '8.jpg',
//     '9.jpg',
// ]
// const someOfNine = () => {
//     document.getElementById('img').src =
//         `images/${nineJpg[~~(Math.random() * nineJpg.length)]}`
// }
// someOfNine()
