export const apiRoutes = {
    auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        refresh: '/auth/refresh',
        profile: '/auth/profile'
    },
    users: {
        get: '/users',
        add: '/users/add',
        delete: '/users/delete'
    },
    posts: '/posts',
    comments: '/comments',
    getCommentsByPostId: '/comments'
    //   getCommentsByPostId: (postId) => `/comments?postId=${postId}`,
}
