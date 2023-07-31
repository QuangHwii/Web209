import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    const products = useSelector((state: any) => state.cart.items)
    const dispatch = useDispatch()
    return (
        <div>Cart

            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({ type: "cart/increament", payload: item.id })}>Increase</button>
                        <button onClick={() => dispatch({ type: "cart/decreament", payload: item.id })}>Decrease</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart