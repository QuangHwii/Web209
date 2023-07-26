import { createSlice } from '@reduxjs/toolkit'
const initialState = { count: 10 } as { count: number }
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        increase: (state, action) => {
            state.count += action.payload
        },
    }
})

export const { increment, decrement, increase } = counterSlice.actions
export const CounterReducer = counterSlice.reducer

