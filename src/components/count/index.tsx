
import { useContext } from "react"
import { CounterContext } from "../context/CounterProvider"


const Counter = () => {
    const { state, dispatch } = useContext(CounterContext)
    return (
        <div>
            Counter : {state.count}

            <button className="border border-gray-500 p-2"
                onClick={() => dispatch({ type: "INCREMENT" })}>
                Tăng
            </button>
            <button className="border border-gray-500 p-2"
                onClick={() => dispatch({ type: "DECREMENT" })}>
                Giảm
            </button>
            <button className="border border-gray-500 p-2"
                onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                Tăng 10
            </button>
        </div>
    )
}

export default Counter