import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    console.log(state);

    return <div>
        {state?.counter?.count}
        <button className='border border-red-500 p-2' onClick={() => dispatch({ type: "counter/increment" })}>INCREMENT</button>
        <button className='border border-red-500 p-2' onClick={() => dispatch({ type: "counter/decrement" })}>DECREMENT</button>
        <button className='border border-red-500 p-2' onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>INCREASE</button>

    </div>
}

export default Counter