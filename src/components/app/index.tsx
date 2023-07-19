import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { CounterReducer } from '../reducers/Counter'
import { productReducer } from '../reducers/Product'
import thunk from 'redux-thunk'


const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

const rootReducer = combineReducers({
    counter: CounterReducer,
    products: productReducer
})

const store = createStore(rootReducer, enhancer)

export default store