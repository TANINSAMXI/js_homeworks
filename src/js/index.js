'use strict'

import PrintedBook from './PrintedBook.js'
import Ebook from './Ebook.js'

const printedBook = new PrintedBook('Mein Kampf', 'Adolf Hitler', 1925, 720)

console.log(printedBook)

console.log(printedBook.info)

console.log(printedBook.getDescription())

const ebook = new Ebook('Cold Yar', 'Yurii H.-G. ', 1932, 2.5)

console.log(ebook)

console.log(ebook.info)

console.log(ebook.getDescription())
