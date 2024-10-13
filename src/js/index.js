'use strict'

import getFormHandlers from './formHandlers.js'
import { STORAGE_KEY } from './constants.js'
import { createTodoElement } from './elements.js'
;(function () {
    const form = document.querySelector('[data-todo-form]')
    const todoItemsContainer = document.querySelector('#todoItems')

    const loadFromLocalStorage = () => {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (savedData) {
            savedData.forEach((todoItem) => {
                const todoItemElement = createTodoElement(todoItem)
                todoItemsContainer.prepend(todoItemElement)
            })
        }
    }

    const { submitHandler, inputHandler } = getFormHandlers(
        form,
        todoItemsContainer
    )

    form.addEventListener('submit', submitHandler)
    form.addEventListener('input', inputHandler)
    document.addEventListener('DOMContentLoaded', loadFromLocalStorage)
})()
