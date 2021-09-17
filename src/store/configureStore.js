import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Item from './Item'
import Cart from './Cart'
import data from './Data'

const reducer = combineReducers({Item, data})
const store = configureStore({reducer})

export default store;