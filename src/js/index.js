'use strict'
;(function () {
    const deepFreeze = (obj) => {
        const freezing = (objectToFreeze) => {
            Object.freeze(objectToFreeze)

            Object.keys(objectToFreeze).forEach((key) => {
                const nestedValues = objectToFreeze[key]

                if (
                    typeof nestedValues === 'object' &&
                    nestedValues !== null &&
                    !Object.isFrozen(nestedValues)
                ) {
                    freezing(nestedValues)
                }
            })
            return objectToFreeze
        }

        return freezing(obj)
    }

    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                },
            },
        },
    }
    deepFreeze(user)
    console.log(user.data)
    user.data.d.a1 = 2
    user.data.d.d1.a2 = 2
})()
