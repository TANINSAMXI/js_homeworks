export const createTodoElement = ({ title, description }) => {
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
