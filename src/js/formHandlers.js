import { createTodoElement } from './elements.js'
import { STORAGE_KEY } from './constants.js'

const getFormHandlers = (...args) => {
    const [form, handleFormData] = args
    if (args.length < 2)
        throw new Error(
            'getFormHandlers needs 2 arguments. Please provide both :form and data.'
        )
    if (!(form instanceof HTMLFormElement))
        throw new Error(
            'The first argument must be a form element (HTMLFormElement).'
        )
    if (!(handleFormData instanceof HTMLElement))
        throw new Error('The second argument must be a valid HTML element')

    let isFormSubmitDisabled = true
    const inputs = Array.from(form.querySelectorAll('input, textarea'))
    const formSubmitBtn = form.querySelector('button[type=submit]')
    const fields = inputs.reduce((acc, { name }) => {
        acc[name] = false
        return acc
    }, {})

    const updateSubmitButtonState = () => {
        isFormSubmitDisabled = !Object.values(fields).every(Boolean)
        isFormSubmitDisabled
            ? formSubmitBtn.setAttribute('disabled', '')
            : formSubmitBtn.removeAttribute('disabled')
    }

    const saveToLocalStorage = (data) => {
        const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        existingData.push(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData))
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (isFormSubmitDisabled) return
        const data = inputs.reduce((acc, { name, value }) => {
            acc[name] = value
            return acc
        }, {})

        const todoItemElement = createTodoElement(data)
        handleFormData.prepend(todoItemElement)
        form.reset()
        inputs.forEach((input) => (fields[input.name] = false))
        updateSubmitButtonState()
        saveToLocalStorage(data)
    }

    const inputHandler = ({ target }) => {
        fields[target.name] = target.value.trim().length > 0
        updateSubmitButtonState()
    }

    return {
        inputHandler,
        submitHandler,
    }
}

export default getFormHandlers
