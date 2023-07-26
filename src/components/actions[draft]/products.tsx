import axios from "axios";
import { pause } from "../untils/pause"

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "products/fetching" }) //isloading = true
    try {
        await pause(1000);
        const { data } = await axios.get(`http://localhost:3000/products`)
        dispatch({ type: "products/fetchingSuccess", payload: data })
    } catch (error: any) {
        dispatch({ type: "products/fetchingFailed", payload: error?.message })
    } finally {
        dispatch({ type: "products/fetchingFailed" })
    }
}

export const addProduct = (product: any) => async (dispatch: any) => {
    try {
        const { data } = await axios.post(`http://localhost:3000/products/`, product)
        dispatch({ type: "product/add", payload: data })
    } catch (error: any) {

    }
}
export const updateProduct = (product: any) => async (dispatch: any) => {
    try {
        const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
        dispatch({ type: "product/update", payload: data })
    } catch (error: any) {

    }
}
export const removeProduct = (id: any) => async (dispatch: any) => {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        dispatch({ type: "product/delete", payload: id })
        // window.location.reload()
    } catch (error: any) {

    }
}