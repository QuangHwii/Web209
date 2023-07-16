import { createContext, useReducer } from "react";

export const CounterContext = createContext({} as any)

const initialState = {
    count: 0
}

const couterReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "INCREASE":
            return { count: state.count + action.payload }

        default:
            return state
    }
}

const CounterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(couterReducer, initialState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider