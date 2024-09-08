'use strict'

const users = [
    {
        index: 0,
        isActive: true,
        balance: '$2,226.60',
        name: 'Eugenia Sawyer',
        gender: 'female',
        phone: '+1 (840) 583-3207',
        address: '949 John Street, Rose, Puerto Rico, 1857',
    },
    {
        index: 1,
        isActive: true,
        balance: '$2,613.77',
        name: 'Pauline Gallegos',
        gender: 'female',
        phone: '+1 (985) 593-3328',
        address: '328 Green point Avenue, Tor boy, North Dakota, 6857',
    },
    {
        index: 2,
        isActive: false,
        balance: '$3,976.41',
        name: 'Middleton Chaney',
        gender: 'male',
        phone: '+1 (995) 591-2478',
        address: '807 Fleet Walk, Brutus, Arkansas, 9783',
    },
    {
        index: 3,
        isActive: true,
        balance: '$1,934.58',
        name: 'Burns Poole',
        gender: 'male',
        phone: '+1 (885) 559-3422',
        address: '730 Seb Avenue, Osage, Alabama, 6290',
    },
    {
        index: 4,
        isActive: true,
        balance: '$3,261.65',
        name: 'Mcfadden Horne',
        gender: 'male',
        phone: '+1 (942) 565-3988',
        address: '120 SchoolStreet, Kirk, Michigan, 1018',
    },
    {
        index: 5,
        isActive: false,
        balance: '$1,790.56',
        name: 'Suzette Lewis',
        gender: 'female',
        phone: '+1 (837) 586-3283',
        address: '314 Dunne Place, Bacon ville, Guam, 9053',
    },
]

const removeSymbols = (str, symbolsToRemove = []) => {
    if (typeof str !== 'string') throw new Error('str must be a string')
    const result = []
    for (let i = 0; i < str.length; i++) {
        if (symbolsToRemove.includes(str[i])) continue
        result.push(str[i])
    }
    return result.join('')
}

const findPhoneNumbersByBalance = (
    arr,
    minBalance = 0,
    keys = {
        balance: 'balance',
        phone: 'phone',
    }
) => {
    if (!Array.isArray(arr)) return []
    if (typeof minBalance !== 'number') return []
    const result = []

    arr.forEach((item) => {
        const normalizedBalance = +removeSymbols(item[keys.balance], ['$', ','])
        if (normalizedBalance > minBalance) result.push(item[keys.phone])
    })
    return result
}

console.log(findPhoneNumbersByBalance(users, 2000))

const getAvgBalance = (arr, balanceKey = 'balance') => {
    if (!Array.isArray(arr)) throw new Error('arr should be an array')
    if (typeof balanceKey !== 'string')
        throw new Error('balanceKey should be a string')

    return arr.reduce((accum, item) => {
        const normalizedBalance = +removeSymbols(item[balanceKey], ['$', ','])
        const reduceBalance = accum + normalizedBalance
        return +reduceBalance.toFixed(2)
    }, 0)
}

console.log(getAvgBalance(users))
