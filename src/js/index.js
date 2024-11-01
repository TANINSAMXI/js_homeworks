'use strict'
;(function () {
    function Student(name, surname, year) {
        this.name = name
        this.surname = surname
        this.year = year
        this.attendance = new Array(10).fill(null)
        this.grades = new Array(10).fill(null)
    }

    Student.prototype.getAge = function () {
        const currentYear = new Date().getFullYear()
        return currentYear - this.year
    }

    Student.prototype.getAverageAttendance = function () {
        const totalDays = this.attendance.filter((days) => days !== null).length
        const attendedDays = this.attendance.filter(
            (days) => days === true
        ).length
        return totalDays ? attendedDays / totalDays : 0
    }

    Student.prototype.getAverageGrade = function () {
        const validGrades = this.grades.filter((grade) => grade !== null)
        const sumGrades = validGrades.reduce((acc, grade) => acc + grade, 0)
        return validGrades.length ? sumGrades / validGrades.length : 0
    }

    Student.prototype.summary = function () {
        const avgAttendance = this.getAverageAttendance()
        const avgGrade = this.getAverageGrade()

        if (avgAttendance > 0.9 && avgGrade > 9) {
            console.log(`${this.name} ${this.surname}: Ух ти, який молодчинка!`)
        } else if (avgAttendance > 0.9 || avgGrade > 9) {
            console.log(
                `${this.name} ${this.surname}: Нормально, але можна краще`
            )
        } else {
            console.log(`${this.name} ${this.surname}: Редька`)
        }
    }

    Student.prototype.present = function () {
        const index = this.attendance.indexOf(null)
        if (index !== -1) this.attendance[index] = true
    }

    Student.prototype.absent = function () {
        const index = this.attendance.indexOf(null)
        if (index !== -1) this.attendance[index] = false
    }

    Student.prototype.mark = function (grade) {
        if (grade < 0 || grade > 10) {
            throw new Error('Grade must be between 0 and 10')
        }
        const index = this.grades.indexOf(null)
        if (index !== -1) this.grades[index] = grade
    }

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

    sigmund.present()
    sigmund.present()
    sigmund.absent()
    sigmund.mark(4)
    sigmund.mark(3)
    sigmund.mark(2)

    const students = [dmytro, alex, sigmund]
    students.forEach((student) => {
        console.log(student.getAge())
        console.log(student.getAverageAttendance())
        console.log(student.getAverageGrade())
        student.summary()
    })
})()
