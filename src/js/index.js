import { fetchPostById, fetchCommentsByPostId } from './api.js'
import { displayPost, displayComments } from './domSelectors.js'

const form = document.querySelector('#idForm')
const btnComment = document.querySelector('[data-comments-btn]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userId = document.querySelector('#userId').value
    fetchPostById(userId).then((data) => {
        displayPost(data)
        btnComment.removeAttribute('disabled')
    })
})

btnComment.addEventListener('click', () => {
    const userId = document.querySelector('#userId').value
    fetchCommentsByPostId(userId).then((comments) => {
        displayComments(comments)
    })
})
