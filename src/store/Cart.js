import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        setCart(state, action){
        },
    }
})

export const {setCart} = slice.actions
export default slice.reducer