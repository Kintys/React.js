const createAsyncReducers = (builder, asyncThunk, onFulfilled) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state.loading = false
            onFulfilled(state, action)
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
}

export default createAsyncReducers
