import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        setCart(state, action){
            state.items = [action.payload, ...state.items]
            state.total = state.items.reduce((acc, item) => acc + item.total, 0)
        },
        removeItem(state, action){
            state.items = [...state.items.filter(({id}) => id !== action.payload)]
            state.total = state.items.reduce((acc, item) => acc + item.total, 0)
        },
        plusQt(state, action){
            state.items[action.payload.index] = {...action.payload.state}
            state.total = state.items.reduce((acc, item) => acc + item.total, 0)
        },
        minusQt(state, action){
            state.items[action.payload.index] = {...action.payload.state}
            state.total = state.items.reduce((acc, item) => acc + item.total, 0)
        },
    }
})

export const {setCart, removeItem, plusQt, minusQt} = slice.actions

export default slice.reducer