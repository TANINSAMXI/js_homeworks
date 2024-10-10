'use strict'
;(function () {
    const LIST_TYPES = {
        UL: 'ul',
        OL: 'ol',
        MENU: 'menu',
    }

    const appendElement = (parentEl = null, elementToAppend = null) => {
        if (!parentEl || !elementToAppend) return
        parentEl.append(elementToAppend)
    }

    const createList = (listItems, listType = LIST_TYPES.UL) => {
        if (!Object.values(LIST_TYPES).includes(listType)) {
            throw new Error('Invalid list type')
        }
        if (!Array.isArray(listItems)) {
            throw new Error('listItems must be an array')
        }
        if (listItems.length === 0) {
            throw new Error('listItems array cannot be empty')
        }

        const listElement = document.createElement(listType)

        listItems.forEach((item) => {
            const listItemElement = document.createElement('li')
            appendElement(listElement, listItemElement)

            if (Array.isArray(item)) {
                const nestedList = createList(item, listType)
                appendElement(listItemElement, nestedList)
            } else {
                listItemElement.textContent = item
            }
            appendElement(listElement, listItemElement)
        })

        return listElement
    }

    const resultList = createList([1, 2, 3, [1, 2, 3]], 'ol')
    appendElement(document.body, resultList)
})()
