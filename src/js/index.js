'use strict'
;(function () {
    const user = (name, age) => {
        let _name = name
        let _age = age

        const getName = () => _name

        const setName = (newName) => {
            _name = newName
        }

        const getAge = () => _age

        const setAge = (newAge) => {
            if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
                _age = newAge
            } else {
                console.error('Error:age only from 0 to 120!')
            }
        }

        return {
            getName,
            setName,
            getAge,
            setAge,
        }
    }

    const newUser = user('Dmytro', 35)

    console.log(newUser.getName())
    console.log(newUser.getAge())

    newUser.setName('Volodymyr')
    console.log(newUser.getName())

    newUser.setAge(28)
    console.log(newUser.getAge())

    newUser.setAge(121)
})()
