'use strict'

;(() => {
    const myPet = {
        name: 'Marko',
        animal: 'cat',
    }
    const returnString = (contextS = this, argumentS = '') => {
        return argumentS + contextS
    }
    console.log(returnString(myPet.animal, 'my pet is  '))
    alert(returnString(myPet.animal, 'my pet is  '))
    const bindBind = (contextS = this, argumentS = '') => {
        return () => {
            return returnString(contextS, argumentS)
        }
    }
    console.log(bindBind(myPet.name, 'his name is  ')())
    alert(bindBind(myPet.name, 'his name is  ')())
})()
