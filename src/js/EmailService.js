class EmailService {
    #logs = []

    _log(message) {
        const date = new Date()
        const formattedDate = date.toLocaleDateString('uk-UA')
        const logMessage = `${formattedDate} ${message}`

        this.#logs.push(logMessage)
        console.log(logMessage)
    }

    getLogs() {
        return this.#logs
    }
}

export default EmailService
