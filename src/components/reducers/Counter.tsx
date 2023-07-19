import { produce } from "immer";

const initialState = {
    count: 10
} as { count: number }

export const CounterReducer = (state = initialState, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case "counter/increment":
                draft.count++
                break;
            case "counter/decrement":
                draft.count--
                break;
            case "counter/increase":
                draft.count += action.payload
                break;

            default:
                return state
        }
    })
}