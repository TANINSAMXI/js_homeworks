import Book from './Book.js'

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year)
        this.fileSize = fileSize
    }

    get info() {
        return `${super.info}, File Size: ${this.fileSize}MB`
    }

    getDescription() {
        return `${super.getDescription()} File size is ${this.fileSize} MB.`
    }

    set fileSize(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('File size must be a positive number.')
            return
        }
        this._fileSize = value
    }

    get fileSize() {
        return this._fileSize
    }
}

export default Ebook
