import { createSlice } from "@reduxjs/toolkit";

function remover(atual, exclu){
    const novo = atual.filter((item, index) => atual[index].id !== exclu)
    return novo
}

const slice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        setCart(state, action){
            state.items = [action.payload, ...state.items]
        },
        removeItem(state, action){
            state.items = [...remover(state.items, action.payload)]
        },
        plusQt(state, action){
            
        },
        minusQt(state, action){
            
        },
        setTotal(state, action){
            state.total = action.payload
        }
    }
})
export const {setCart, removeItem, setTotal} = slice.actions

export function addValue(items){
    const value = items.reduce((acc, item) => acc + item.total, 0)
    setTotal(value) 
}
export default slice.reducer