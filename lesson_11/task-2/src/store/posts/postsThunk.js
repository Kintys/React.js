
import { API_BASE_URL, apiRouter } from '@/api/apiRouter'
import RequestManager from '@api/requestManager'
import { createAsyncThunk } from '@reduxjs/toolkit'

const requestManager = new RequestManager(API_BASE_URL)

export const fetchPosts = createAsyncThunk('posts/fetch', async (_, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.fetchData(apiRouter.posts)
        if (error) {
            return rejectWithValue(error)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
