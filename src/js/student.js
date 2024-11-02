'use strict'
function Student(name, surname, year) {
    this.name = name
    this.surname = surname
    this.year = year
    this.age = new Date().getFullYear() - year

    this.currentLesson = 0
    this.attendance = new Array(10)
    this.grades = new Array(10)
}

Student.prototype._setAttendance = function (isLessonAttended) {
    if (typeof isLessonAttended !== 'boolean')
        throw new Error('Attendance should be a boolean')
    if (this.currentLesson >= 10) throw new Error('Attendance limit exceeded')

    this.attendance[this.currentLesson] = isLessonAttended
    if (isLessonAttended) this.currentLesson += 1 // Increment only if present
}

Student.prototype.present = function () {
    this._setAttendance(true)
}

Student.prototype.absent = function () {
    this._setAttendance(false)
}

Student.prototype.mark = function (grade) {
    if (typeof grade !== 'number' || grade < 0 || grade > 10) {
        throw new Error('Grade must be between 0 and 10')
    }

    const lessonIndex = this.currentLesson - 1
    if (lessonIndex < 0 || !this.attendance[lessonIndex]) {
        throw new Error('Cannot assign grade for an unvisited lesson')
    }

    this.grades[lessonIndex] = grade
}

Student.prototype._calcAvgMark = function () {
    const validGrades = this.grades.filter((grade) => typeof grade === 'number')
    if (validGrades.length === 0) return 0

    const sumGrades = validGrades.reduce((acc, grade) => acc + grade, 0)
    return sumGrades / validGrades.length
}

Student.prototype._calcAvgAtd = function () {
    const attendedLessons = this.attendance.filter((day) => day === true).length
    return this.currentLesson ? attendedLessons / this.currentLesson : 0
}

Student.prototype.summary = function () {
    const avgMark = this._calcAvgMark()
    const avgAtd = this._calcAvgAtd()

    if (avgAtd > 0.9 && avgMark > 9) {
        console.log(
            `${this.name} ${this.surname} ${this.year} ${this.age} : Ух ти, який молодчинка!`
        )
    } else if (avgAtd > 0.9 || avgMark > 9) {
        console.log(
            `${this.name} ${this.surname} ${this.year} ${this.age}: Нормально, але можна краще`
        )
    } else {
        console.log(
            `${this.name} ${this.surname} ${this.year} ${this.age}: Редька!`
        )
    }
}

export default Student
