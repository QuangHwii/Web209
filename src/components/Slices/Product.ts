import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, getProducts, updateProduct } from "../action/product"

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
        });
        builder.addCase(getProducts.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products = action.payload
        });
        builder.addCase(getProducts.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        });

        //add
        builder.addCase(addProduct.fulfilled, (state: any, action) => {
            state.products.push(action.payload)
        });
        //update
        builder.addCase(updateProduct.fulfilled, (state: any, action) => {
            const newProduct = action.payload
            state.products = state.products.map((item: any) => item.id == newProduct.id ? newProduct : item)
        });
        //delete
        builder.addCase(deleteProduct.fulfilled, (state: any, action) => {
            const id = action.payload
            state.products = state.products.filter((item: any) => item.id !== id)
        });
    }
})

export const productReducer = ProductSlice.reducer