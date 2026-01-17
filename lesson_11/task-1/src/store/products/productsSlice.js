import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts, fetchProductById, createProduct, updateProduct, deleteProduct } from './productsThunk'
import createAsyncReducers from '../helpers/createAsyncReducers.js'

const initialState = {
    products: [],
    filterValue: null,
    sortValue: null,
    product: null,
    loading: false,
    error: null
}

const asyncThunksConfig = {
    products: {
        asyncThunk: fetchProducts,
        onFulfilled: (state, action) => {
            state.products = action.payload
        }
    },
    productById: {
        asyncThunk: fetchProductById,
        onFulfilled: (state, action) => {
            state.product = action.payload
        }
    },
    createNewProduct: {
        asyncThunk: createProduct,
        onFulfilled: (state, action) => {
            state.products.push(action.payload)
        }
    },
    updateProduct: {
        asyncThunk: updateProduct,
        onFulfilled: (state, action) => {
            const index = state.products.findIndex((p) => p.id === action.payload.id)
            if (index !== -1) {
                state.products[index] = action.payload
            }
            state.product = action.payload
        }
    },
    deleteProduct: {
        asyncThunk: deleteProduct,
        onFulfilled: (state, action) => {
            state.products = state.products.filter((p) => p.id !== action.payload.id)
        }
    }
}

const buildProductsExtraReducers = (builder) => {
    Object.values(asyncThunksConfig).forEach(({ asyncThunk, onFulfilled }) => {
        createAsyncReducers(builder, asyncThunk, onFulfilled)
    })
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filterValue = action.payload
        },
        setSort: (state, action) => {
            state.sortValue = action.payload
        },
        clearSort: (state) => {
            state.sortValue = null
        },
        clearFilter: (state) => {
            state.filterValue = null
        },
        clearProduct: (state) => {
            state.product = null
            state.error = null
        }
    },
    extraReducers: buildProductsExtraReducers
})

export const { clearProduct, clearFilter, clearSort, setFilter, setSort } = productsSlice.actions

export default productsSlice.reducer
