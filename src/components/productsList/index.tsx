import { useContext, useEffect } from "react"
import { ProductContext } from "../context/productContext"

const ProductsList = () => {
    const { products, setproduct, fetchProduct, deleteProduct, addProduct, editProduct } = useContext(ProductContext)

    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item?.id}>{item?.name}</div>
            ))}
            <button onClick={() => deleteProduct({ id: 3 })} className="border border-red-500 mr-2">Remove</button>
            <button onClick={() => addProduct({ name: "Product D" })} className="border border-red-500 mr-2">Add</button>
            <button onClick={() => editProduct({ id: 4, name: "Product C update" })} className="border border-red-500 mr-2">Edit</button>
        </div>
    )
}
// tìm hiểu useReducer

export default ProductsList