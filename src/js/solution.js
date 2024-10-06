'use strict'

;(function () {
    const ulElement = document.getElementById('ulId')
    const logItems = () => {
        const listItems = ulElement.getElementsByTagName('li')
        for (let i = 0; i < listItems.length; i++) {
            console.log(listItems[i].textContent)
        }
    }

    const getAttributes = () => {
        const valueArr = []
        const nameArr = []
        const attributes = ulElement.attributes
        for (const attr of attributes) {
            valueArr.push(attr.value)
            nameArr.push(attr.name)
        }
        console.log(valueArr)
        console.log(nameArr)
    }

    const lastLiChanges = (name) => {
        const listItems = ulElement.getElementsByTagName('li')
        listItems[listItems.length - 1].textContent =
            `Hello,my name is  ${name}`
    }

    const addAttribute = (name) => {
        const listItems = ulElement.getElementsByTagName('li')
        listItems[0].setAttribute('data-my-name', name)
    }

    const removeAttribute = () => {
        ulElement.removeAttribute('data-dog-tail')
    }

    logItems()
    getAttributes()
    lastLiChanges('Dmytro')
    addAttribute('Dmytro')
    removeAttribute()
    logItems()
    getAttributes()
})()
