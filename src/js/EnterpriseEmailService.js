import PremiumEmailService from './PremiumEmailService.js'

class EnterpriseEmailService extends PremiumEmailService {
    migratePremiumEmails(targetService) {
        if (!(targetService instanceof PremiumEmailService)) {
            throw new Error('Invalid target service')
        }

        const emailsToMigrate = this.getPremiumEmails()
        emailsToMigrate.forEach((email) => {
            targetService.addPremiumEmail(email)
            this._log(`Migrated: ${email}`)
        })

        this.getPremiumEmails().length = 0
    }
}

export default EnterpriseEmailService
