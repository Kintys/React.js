import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from './task/tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
})
