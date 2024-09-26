'use strict'

const oneHundredTable = () => {
    let table = '<table>'

    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0) {
            table = table + '<tr>'
        }
        table = table + '<td>' + (i + 1) + '</td>'
        if (i % 10 === 9) {
            table += '</tr>'
        }
    }
    table += '</table>'
    document.body.innerHTML = table
}
oneHundredTable()
