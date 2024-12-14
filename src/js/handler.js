'use strict'

export const handleFormSubmit = (formElement) => {
    const formData = new FormData(formElement)
    return formData.get('cityName')
}
