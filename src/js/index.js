'use strict'

import Student from './student.js'

const dmytro = new Student('Dmytro', 'X', 1989)
const alex = new Student('Alex', 'Y', 1999)
const sigmund = new Student('Sigmund', 'F', 2009)

for (let i = 0; i < 9; i++) dmytro.present()
dmytro.mark(10)
dmytro.mark(10)
dmytro.mark(10)

alex.present()
alex.present()
alex.mark(7)
alex.mark(6)
alex.mark(5)

sigmund.absent()
sigmund.absent()

const students = [dmytro, alex, sigmund]
students.forEach((student) => student.summary())
