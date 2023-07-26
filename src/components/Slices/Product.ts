import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../action/product"

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //fetching
        builder.addCase(getProducts.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products = action.payload
        })
    }
})

export const productReducer = ProductSlice.reducer