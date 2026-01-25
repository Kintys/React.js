export const API_BASE_URL = 'http://localhost:3000'

export const postsApi = {
    getPosts: ({ page = 1, limit = 10 }) => (page && limit ? `/posts?page=${page}&limit=${limit}` : '/posts'),
    deletePost: (id) => `/posts/${id}`,
    addPost: '/posts',
    updatePost: (id) => `/posts/${id}`
}
