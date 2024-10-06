'use strict'
;(function () {
    const createUl = (array) => {
        const ul = document.createElement('ul')
        array.forEach((item) => {
            const li = document.createElement('li')
            li.textContent = item
            if (Array.isArray(item)) {
                li.append(createUl(item))
            }
            ul.append(li)
        })
        return ul
    }

    const arrOfNum = [1, 2, 3]
    document.body.append(createUl(arrOfNum))

    const arrOfArrays = [1, 2, [1.1, 1.2, 1.3], 3]
    document.body.append(createUl(arrOfArrays))
})()
