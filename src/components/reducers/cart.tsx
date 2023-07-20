import { produce } from "immer";

const initialState = {
    cart: [],
    isLoading: false,
    error: ""
} as { cart: any[]; isLoading: boolean; error: string }
export const AddToCart = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/fetching":
                draftState.isLoading = true;
                break
            case "cart/add":
                draftState.cart.push(action.payload);
                break;
            default:
                return state;
        }
    })
}

//currying
//clousure
// redux dev tools