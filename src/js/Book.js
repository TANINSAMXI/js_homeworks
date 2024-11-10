class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }

    getDescription() {
        return `This is a book titled '${this.title}' by ${this.author}.`
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Year must be a positive number.')
            return
        }
        this._year = value
    }

    get year() {
        return this._year
    }
}

export default Book
