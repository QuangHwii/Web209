import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts, removeProduct, updateProduct } from '../actions/products';

const ProductsList = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    // console.log("state", products);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>

            {products?.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    <button
                        className="border border-green-500 ml-3 p-1"
                        onClick={() =>
                            dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                        }
                    >
                        Add to cart
                    </button>

                </div>
            ))}
            <button onClick={() => dispatch(addProduct({ name: "Product C" }))}>Add</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}>
                Update
            </button>
            <button onClick={() => dispatch(removeProduct(3))}>Delete</button>
        </div>
    )
}

export default ProductsList 