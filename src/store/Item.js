import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Item',
    initialState: {
        category: 'Burguers',
    },
    reducers: {
        setItem(state, action){
            state.category = action.payload
        },
    }
})

export const {setItem} = slice.actions
export default slice.reducer