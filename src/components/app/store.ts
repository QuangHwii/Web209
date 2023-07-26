import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { CounterReducer } from "../Slices/Counter"
import { productReducer } from "../Slices/Product"
const store = configureStore({
    reducer: {
        counter: CounterReducer,
        products: productReducer,
        // cart: cartReducer
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;