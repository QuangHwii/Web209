import { createContext, useState } from 'react'


export const ProductContext = createContext({} as any)

const ProductProvider = ({ children }: any) => {
    const [products, setproduct] = useState([
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ] as any)

    const tang = () => {
        setcount(count + 1)
    }
    const giam = () => {
        setcount(count - 1)
    }

    const [count, setcount] = useState(0)
    return (
        <ProductContext.Provider value={{ count , tang, giam, products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider