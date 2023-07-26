import { useAppDispatch, useAppSelector } from '../app/hook';
import { increment, decrement, increase } from '../Slices/Counter';

const Counter = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state)
    // console.log(state);

    return <div>
        {state?.counter?.count}
        <button className='border border-red-500 p-2' onClick={() => dispatch(increment())}>INCREMENT</button>
        <button className='border border-red-500 p-2' onClick={() => dispatch(decrement())}>DECREMENT</button>
        <button className='border border-red-500 p-2' onClick={() => dispatch(increase(10))}>INCREASE</button>

    </div>
}

export default Counter