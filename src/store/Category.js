import { createSlice } from "@reduxjs/toolkit";
import { api } from '.././service/api'
const slice = createSlice({
    name: 'Category',
    initialState: {
        category: 'Burguers',
        items: []
    },
    reducers: {
        setCategory(state, action){
            state.category = action.payload
        },
        setItems(state, action){
            state.items = action.payload
        }
    }
})

export const {setCategory, setItems} = slice.actions
export const newItems = (category) => async (dispatch) => {
    try {
        const response = await api.get(`/${category === 'Pizzas' ? 'pizza' : category}`)
        const data = await response.data
        return dispatch(setItems(data))
    } catch (error) {
        return dispatch(setItems(error))
    }
}
export default slice.reducer