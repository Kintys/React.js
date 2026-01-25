import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask: (state, action) => {
            const newTask = action.payload
            state.tasks = [...state.tasks, newTask]
        },
        deleteTask: (state, action) => {
            const tasksIndex = action.payload
            state.tasks = state.tasks.filter((_, index) => index !== tasksIndex)
        },
        repeatTask: (state, action) => {
            const tasksIndex = action.payload
            const repeatTask = state.tasks[tasksIndex]
            state.tasks = [...state.tasks, repeatTask]
        }
    }
})
export const { setTask, deleteTask, repeatTask } = tasksSlice.actions

export default tasksSlice.reducer
