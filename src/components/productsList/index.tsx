import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, fetchProducts, removeProduct, updateProduct } from '../actions[draft]/products';
import { useAppDispatch, useAppSelector } from "../app/hook";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../action/product";

const ProductsList = () => {
    const dispatch = useAppDispatch()
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // console.log("state", products);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={() => dispatch(addProduct({ name: "Product C" }))}>Add</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}>
                Update
            </button>
            <button onClick={() => dispatch(deleteProduct(3))}>Delete</button>
        </div>
    )
}

export default ProductsList 