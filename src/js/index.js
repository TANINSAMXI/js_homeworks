'use strict'

let number = 1
const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)
}

const generateTable = () => {
    const tableSize = 10
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.append(tbody)
    for (let i = 0; i < tableSize; i++) {
        const tr = document.createElement('tr')
        for (let c = 0; c < tableSize; c++) {
            const td = document.createElement('td')
            td.innerText = `${number}`
            number++
            tr.append(td)
        }
        tbody.append(tr)
    }
    return table
}

appendHTMLElement(document.body, generateTable())

// const oneHundredTable = () => {
//     let table = '<table>'
//
//     for (let i = 0; i < 100; i++) {
//         if (i % 10 === 0) {
//             table = table + '<tr>'
//         }
//         table = table + '<td>' + (i + 1) + '</td>'
//         if (i % 10 === 9) {
//             table += '</tr>'
//         }
//     }
//     table = table + '</table>'
//     document.body.innerHTML = table
// }
// oneHundredTable()
