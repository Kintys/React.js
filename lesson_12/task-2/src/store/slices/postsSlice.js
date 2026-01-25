import { createSlice } from '@reduxjs/toolkit'
import { deletePost, fetchPosts, createPost, updatePost } from './postsThunk'

const initialState = {
    posts: [],
    postId: null,
    meta: {
        page: 1,
        limit: 10,
        totalPagesNumber: 0
    },
    loading: false,
    error: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        clearPosts: (state) => {
            state.posts = []
            state.page = 1
        },
        clearId: (state) => {
            state.postId = null
        },
        addPostId: (state, action) => {
            const postId = action.payload
            state.postId = postId
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.meta.page = action.payload.meta.page
                state.meta.totalPagesNumber = action.payload.meta.totalPagesNumber
                state.posts = action.payload.posts
                state.loading = false
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.error
            })

            // delete
            .addCase(deletePost.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                const deleteId = action.payload.id
                state.posts = state.posts.filter((post) => post.id !== deleteId)
                state.loading = false
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.error
            })

            // add
            .addCase(createPost.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createPost.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // update
            .addCase(updatePost.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { clearError, clearPosts, addPostId, clearId } = postsSlice.actions

export default postsSlice.reducer
