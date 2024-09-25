'use strict'

const nineJpg = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
]
const someOfNine = () => {
    document.getElementById('img').src =
        `images/${nineJpg[~~(Math.random() * nineJpg.length)]}`
}
someOfNine()
