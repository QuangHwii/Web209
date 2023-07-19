import axios from 'axios'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../actions/products';

const ProductsList = () => {
    const dispatch = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(fetchProducts() as any)
    }, [dispatch])


    const addProduct = async (product: any) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products/`, product)
            dispatch({ type: "product/add", payload: data })
        } catch (error: any) {

        }
    }
    const updateProduct = async (product: any) => {
        try {
            const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
            dispatch({ type: "product/update", payload: data })
        } catch (error: any) {

        }
    }
    const removeProduct = async (id: any) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`)
            dispatch({ type: "product/delete", payload: id })
            // window.location.reload()
        } catch (error: any) {

        }
    }
    // console.log("state", products);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "Product C" })}>Add</button>
            <button onClick={() => updateProduct({ name: "Product C updated", id: 3 })}>
                Update
            </button>
            <button onClick={() => removeProduct(3)}>Delete</button>
        </div>
    )
}

export default ProductsList 