import { useContext } from "react"
import { ProductContext } from "../context/productContext"


const Counter = () => {
    const { count, tang, giam } = useContext(ProductContext)
    return (
        <div>
            Counter: {count}

            <button onClick={() => tang()}>+</button>
            <button onClick={() => giam()}>-</button>
        </div>
    )
}

export default Counter