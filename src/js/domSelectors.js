export const displayPost = (data) => {
    const title = document.querySelector('[data-post-title]')
    const body = document.querySelector('[data-post-body]')
    title.textContent = `Title: ${data.title}`
    body.textContent = `Body: ${data.body}`
}

export const displayComments = (comments) => {
    const commentList = document.querySelector('#comments')
    commentList.innerHTML = comments
        .map(
            (comment) =>
                `<li>Id: ${comment.id} | Email: ${comment.email}<br>Comment: ${comment.body}</li>`
        )
        .join('')
}
