import EmailService from './EmailService.js'

class PremiumEmailService extends EmailService {
    static emailLimit = 5
    #premiumEmails = []

    addPremiumEmail(email) {
        if (this.#premiumEmails.length >= PremiumEmailService.emailLimit) {
            throw new Error('Limit exceeded')
        }
        this.#premiumEmails.push(email)
        this._log(`Added: ${email}`)
    }

    getPremiumEmails() {
        return this.#premiumEmails
    }
}

export default PremiumEmailService
