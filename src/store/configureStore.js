import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Category from './Category'
import Cart from './Cart'

const reducer = combineReducers({Category, Cart})
const store = configureStore({reducer})

export default store;