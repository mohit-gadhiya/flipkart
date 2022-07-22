import {createStore,combineReducers,applyMiddleware} from 'redux'
import {getProductsReducer,getProductDetailReducer} from './reducers/productReducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer
})


const middleware = [thunk];

const store  = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;