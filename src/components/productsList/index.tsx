import { useContext } from "react"
import { ProductContext } from "../context/productContext"

const ProductsList = () => {
    const { products, setproduct } = useContext(ProductContext)
    return (
        <div>
            {products?.map((item: any) => (
                <div>{item?.name}</div>
            ))}
        </div>
    )
}

export default ProductsList