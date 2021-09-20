import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Order',
    initialState: {
        items: [],
        info: {} 
    },
    reducers: {
        setOrder(state, action){
            state.items = [...action.payload[0]]
            state.info = {...action.payload[1]}
        }
    }
})

export const {setOrder, setInfo} = slice.actions

export default slice.reducer
