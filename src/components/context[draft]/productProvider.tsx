import { createContext, useReducer } from 'react'
import { produce } from 'immer'


export const ProductContext = createContext({} as any)

const initialState = {
    products: [],
    isLoading: false,
    error: ""
}

const ProductReducer = (state: any, action: any) => {

    //action {type:"FETCH_PRODUCTS, payload:[]"}
    switch (action.type) {
        case "product/fetch":
            state.products = action.payload
            return
        case "product/add":
            state.products.push(action.payload)
            return
        case 'product/delete':
            const id = action.payload;
            state.products = state.products?.filter((item: any) => item.id !== id)
            return;

        case "product/update":
            const product = action.payload;
            state.products = state.products.map((item: any) =>
                item.id === product.id ? product : item
            );
            return;
        default:
            return state;
    }
}

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(ProductReducer), initialState)

    /*
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
        <ProductContext.Provider value={{ products, fetchProduct }}>
            {children}
        </ProductContext.Provider>
    )
     */

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider