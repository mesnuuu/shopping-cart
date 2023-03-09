import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchAllProducts = createAsyncThunk('fetch-all-products',
    async (apiURL) => {
        const response = await fetch(apiURL)
        return response.json()
    })

const productSlice = createSlice({

    name: 'products',

    initialState: {
        data: [],
        fetchStatus: ''
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.fetchStatus = 'success'
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.fetchStatus = 'error'
            })
    }

})