import { createSlice } from '@reduxjs/toolkit'
import createAsyncReducers from '../helpers/createAsyncReducers.js'
import { fetchPosts } from './postsThunk.js'

const initialState = {
    postsList: [],
    loading: false,
    error: null
}

const asyncThunksConfig = {
    loadPostList: {
        asyncThunk: fetchPosts,
        onFulfilled: (state, action) => {
            state.postsList = action.payload
        }
    },
}

const buildPostsExtraReducers = (builder) => {
    Object.values(asyncThunksConfig).forEach(({ asyncThunk, onFulfilled }) => {
        createAsyncReducers(builder, asyncThunk, onFulfilled)
    })
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers: buildPostsExtraReducers
})


export default postsSlice.reducer
