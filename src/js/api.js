export const fetchPostById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .catch(() => {
            throw new Error('Failed to fetch post')
        })
}

export const fetchCommentsByPostId = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .catch(() => {
            throw new Error('Failed to fetch comments')
        })
}
