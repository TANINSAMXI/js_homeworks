'use strict'
;(function () {
    const form = document.querySelector('[data-todo-form]')
    const todoItemsContainer = document.querySelector('#todoItems')

    const createTodoItem = ({ title, description }) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'col-4'

        const taskWrapper = document.createElement('div')
        taskWrapper.className = 'taskWrapper'

        const taskHeading = document.createElement('div')
        taskHeading.className = 'taskHeading'
        taskHeading.textContent = title

        const taskDescription = document.createElement('div')
        taskDescription.className = 'taskDescription'
        taskDescription.textContent = description

        taskWrapper.appendChild(taskHeading)
        taskWrapper.appendChild(taskDescription)
        wrapper.appendChild(taskWrapper)

        return wrapper
    }

    const getFormHandlers = (form) => {
        const fields = {}
        const formSubmitBtn = form.querySelector('button[type=submit]')

        const init = () => {
            form.querySelectorAll('input, textarea').forEach(({ name }) => {
                fields[name] = false
            })
        }
        init()

        const updateSubmitButtonState = () => {
            const isFormValid = Object.values(fields).every(Boolean)
            formSubmitBtn.disabled = !isFormValid
        }

        //#1
        const submitHandler = (event) => {
            event.preventDefault()
            if (!Object.values(fields).every(Boolean)) return

            const data = Array.from(event.target.elements).reduce(
                (acc, { name, value }) => {
                    acc[name] = value
                    return acc
                },
                {}
            )
            console.log(data)

            const todoItemElement = createTodoItem(data)
            todoItemsContainer.prepend(todoItemElement)
            event.target.reset()
            init()
            updateSubmitButtonState()
        }

        // #2
        const inputHandler = ({ target }) => {
            fields[target.name] = target.value.trim().length > 0
            updateSubmitButtonState()
        }

        return {
            inputHandler,
            submitHandler,
        }
    }

    const { submitHandler, inputHandler } = getFormHandlers(form)

    form.addEventListener('submit', submitHandler)
    form.addEventListener('input', inputHandler)
})()
