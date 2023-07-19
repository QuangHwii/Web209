import axios from "axios";
import { pause } from "../untils/pause"

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "products/fetchProductRequest" }) //isloading = true
    try {
        await pause(2000);
        const { data } = await axios.get(`http://localhost:3000/products`)
        dispatch({ type: "products/fetchProductsSuccess", payload: data })
    } catch (error: any) {
        dispatch({ type: "products/fetchProductsError", payload: error?.message })
    }
}