import { produce } from "immer";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[]; isLoading: boolean; error: string }
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "products/fetching":
                draftState.isLoading = true;
                break
            case "products/fetchingSuccess":
                draftState.products = action.payload;
                draftState.isLoading = false;
                break
            case "products/fetchingFailed":
                draftState.isLoading = false;
                draftState.error = action.payload;
                break
            case "products/fetchingFinally":
                draftState.isLoading = false
                break;
            case "product/add":
                draftState.products.push(action.payload);
                break;
            case "product/update":
                const product = action.payload;
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item);
                // draftState.products[action.payload.id] = action.payload;
                break;
            case "product/delete":
                const id = action.payload;
                draftState.products = draftState.products.filter(item => item.id !== id);
                break;
            default:
                return state;
        }
    })
}

//currying
//clousure
// redux dev tools