import Book from './Book.js'

class PrintedBook extends Book {
    constructor(title, author, year, pageCount) {
        super(title, author, year)
        this.pageCount = pageCount
    }

    get info() {
        return `${super.info}, Pages: ${this.pageCount}`
    }

    getDescription() {
        return `${super.getDescription()} It has ${this.pageCount} pages.`
    }

    set pageCount(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Page count must be a positive number.')
            return
        }
        this._pageCount = value
    }

    get pageCount() {
        return this._pageCount
    }
}

export default PrintedBook
