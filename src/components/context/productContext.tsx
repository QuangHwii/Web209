import { createContext, useState } from 'react'
import { ICar } from '../interface/car'
import axios from 'axios'


export const ProductContext = createContext({} as any)

const ProductProvider = ({ children }: any) => {
    const [products, setproduct] = useState([] as any)

    const fetchProduct = async () => {
        const { data } = await axios.get("http://localhost:3000/products")
        setproduct(data)
        console.log(data);

    }

    const deleteProduct = async (product: any) => {
        try {
            //call api 
            await axios.delete(`http://localhost:3000/products/${product.id}`)
            // rerender
            setproduct(products.filter((item: any) => item.id !== product.id))
        } catch (error: any) {
            console.log(error?.message);

        }
    }
    const addProduct = async (product: any) => {
        try {
            //call api 
            const { data } = await axios.post(`http://localhost:3000/products/`, product)
            // rerender
            setproduct([...products, data])
            console.log(data);

        } catch (error: any) {
            console.log(error?.message);

        }
    }
    const editProduct = async (product: any) => {
        try {
            //call api 
            const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
            // rerender
            setproduct(products?.map((item: any) => item.id === data.id ? data : item))
        } catch (error: any) {
            console.log(error?.message);

        }
    }

    return (
        <ProductContext.Provider value={{ products, fetchProduct, deleteProduct, addProduct, editProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider