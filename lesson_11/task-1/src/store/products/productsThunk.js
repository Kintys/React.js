import apiRoutes, { API_BASE_URL } from '@api/apiRoutes'
import RequestManager from '@api/requestManager'
import { createAsyncThunk } from '@reduxjs/toolkit'

const requestManager = new RequestManager(API_BASE_URL)

export const fetchProducts = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.fetchData(apiRoutes.productsList)
        if (error) {
            return rejectWithValue(error)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const fetchProductById = createAsyncThunk('products/fetchById', async (id, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.fetchData(apiRoutes.getProductById(id))
        if (error) {
            return rejectWithValue(error)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createProduct = createAsyncThunk('products/create', async (productData, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.postRequest(apiRoutes.productsList, productData)
        if (error) {
            return rejectWithValue(error)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateProduct = createAsyncThunk('products/update', async ({ id, productData }, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.putRequest(apiRoutes.getUpdateProductLink(id), productData)
        if (error) {
            return rejectWithValue(error)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteProduct = createAsyncThunk('products/delete', async (id, { rejectWithValue }) => {
    try {
        const { data, error } = await requestManager.deleteRequest(apiRoutes.getDeleteProductLink(id))
        if (error) {
            return rejectWithValue(error)
        }
        return { id, ...data }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
