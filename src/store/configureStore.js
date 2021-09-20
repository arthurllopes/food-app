import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Category from './Category'
import Cart from './Cart'
import Order from './Order'

const reducer = combineReducers({Category, Cart, Order})
const store = configureStore({reducer})

export default store;