import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data
        } catch (error: any) {
            return error?.message
        }
    }
)

// export const addProduct = (product: any) => async (dispatch: any) => {
//     try {
//         const { data } = await axios.post(`http://localhost:3000/products/`, product)
//         dispatch({ type: "product/add", payload: data })
//     } catch (error: any) {

//     }
// }
// export const updateProduct = (product: any) => async (dispatch: any) => {
//     try {
//         const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
//         dispatch({ type: "product/update", payload: data })
//     } catch (error: any) {

//     }
// }
// export const removeProduct = (id: any) => async (dispatch: any) => {
//     try {
//         await axios.delete(`http://localhost:3000/products/${id}`)
//         dispatch({ type: "product/delete", payload: id })
//         // window.location.reload()
//     } catch (error: any) {

//     }
// }