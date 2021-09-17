import {api} from '../service/api';
const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        showItens(state, action){
            state = action.payload
        }
    }
})

const {showItens} = slice.actions

export const fetchData = (category) => async (dispatch) => {
    const response = await api.get(`/${category}`)
    const data = await response.data
    dispatch(showItens(data))
}

export default slice.reducer