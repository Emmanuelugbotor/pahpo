import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTiils, composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { cartReducer } from './reducers/cartReducers'
import { getProductReducer, getProductDetailsReducer, } from './reducers/productReducer'
import { userRegisterReducer, userSignInReducer } from './reducers/usersReducer';
import { orderCreateReducer } from './reducers/orderReducers';
const reducers = combineReducers({
    cart: cartReducer,
    getProduct: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer
}) 

const middleware = { thunk };

const productsFromLocalStorage = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const userSignIn = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
const shippingAdress = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : []

const INITIAL_CART_STATE = {

    cart:{ cartItems: cartFromLocalStorage, shippingAdress: shippingAdress },
    userSignIn: { userInfo:  userSignIn },
    getProduct: { products:  productsFromLocalStorage }

}

const store = createStore(
    
    reducers, 
    INITIAL_CART_STATE,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;