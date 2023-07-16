import { useContext, useEffect } from "react"
import { ProductContext } from "../context/productProvider"
import axios from "axios"

const ProductsList = () => {
    const { state, dispatch } = useContext(ProductContext)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                dispatch({ type: "product/fetch", payload: data })
            } catch (error: any) {
                console.log(error?.message);

            }
        }
        fetchProduct()

    }, [])
    const addProduct = async (product: any) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product)
            dispatch({ type: "product/add", payload: data })
        } catch (error: any) {
            console.log(error?.message);
        }
    }

    const removeProduct = async (product: any) => {
        try {
            await axios.delete(`http://localhost:3000/products/${product.id}`)
            dispatch({ type: "product/delete", payload: product.id })
        } catch (error: any) {
            console.log(error?.message);
        }
    }

    const updateProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            dispatch({ type: "product/update", payload: data });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div>
            {state?.products?.map((item: any) => (

                <div key={item.id}>{JSON.stringify(item.id)}{item?.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "Product C" })} className="border border-red-500 mr-2">Add</button>
            <button onClick={() => updateProduct({ id: 3, name: "Product C update" })} className="border border-red-500 mr-2">Edit</button>
            <button onClick={() => removeProduct({ id: 3 })} className="border border-red-500 mr-2">Remove</button>
        </div>
    )
}
// tìm hiểu useReducer

export default ProductsList 