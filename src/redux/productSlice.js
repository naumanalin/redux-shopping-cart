import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// action
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    reducers: {
        // You can add additional reducers if needed
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false; // Reset error state on new fetch
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false; // Clear any previous error
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.isError = true; // Set error state if the fetch fails
        });
    }
});



export default productsSlice.reducer;
