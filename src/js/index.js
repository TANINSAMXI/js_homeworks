import PremiumEmailService from './PremiumEmailService.js'
import EnterpriseEmailService from './EnterpriseEmailService.js'

const premiumService1 = new PremiumEmailService()
const premiumService2 = new PremiumEmailService()
const enterpriseService = new EnterpriseEmailService()

premiumService1.addPremiumEmail('vip1@premium.com')
premiumService1.addPremiumEmail('vip2@premium.com')

console.log(premiumService1.getPremiumEmails())

enterpriseService.addPremiumEmail('enterprise@premium.com')
enterpriseService.migratePremiumEmails(premiumService2)

console.log(premiumService2.getPremiumEmails())
console.log(premiumService1.getLogs())
