'use strict'

const generateTable = (rows, columns) => {
    if (
        typeof rows !== 'number' ||
        typeof columns !== 'number' ||
        rows <= 0 ||
        columns <= 0
    ) {
        console.error('arguments can be  only positive numbers!')
        return null
    }
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    let cellContent = createCellCounter()
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr')
        for (let c = 0; c < columns; c++) {
            const td = document.createElement('td')
            td.innerText = cellContent()
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    return table
}
const appendHTMLElement = (parentElement, elementToAppend) => {
    if (
        !(parentElement instanceof HTMLElement) ||
        !(elementToAppend instanceof HTMLElement)
    ) {
        console.error('arguments can be only HTML elements!')
        return
    }
    parentElement.appendChild(elementToAppend)
}
const createCellCounter = () => {
    let count = 1
    return () => count++
}
const tableElement = generateTable(10, 10)

if (tableElement !== null) {
    appendHTMLElement(document.body, tableElement)
}
