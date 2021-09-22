import { createSlice } from "@reduxjs/toolkit";

const setTotal = (items) => {
    const cartTotal = items.reduce((acc, item) => acc + item.total, 0)
    return cartTotal
}
const slice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        setCart(state, action){
            state.items = [action.payload, ...state.items]
            state.total = setTotal(state.items)
        },
        removeItem(state, action){
            state.items = [...action.payload]
            state.total = setTotal(state.items)
        },
        changeQuantity(state, action){
            state.items[action.payload.index] = {...action.payload.state}
            state.total = setTotal(state.items)
        }
    }
})

export const {setCart, removeItem, changeQuantity} = slice.actions


export const changeItem = (ID, type) => (dispatch, getState) => {
    const {items} = getState().Cart
    const index = items.map(({id}) => id).indexOf(ID);
    const selectedItem = items[index]
    if(type === 'plus') {
        const quantity = selectedItem.qt + 1
        const itemTotal = selectedItem.price * quantity
        const state = {...selectedItem, qt: quantity, total: itemTotal}  
        dispatch(changeQuantity({index, state}))
    } else {
        if(selectedItem.qt > 1) {
            const quantity = selectedItem.qt - 1
            const itemTotal = selectedItem.price * quantity
            const state = {...selectedItem, qt: quantity, total: itemTotal}
            dispatch(changeQuantity({index, state}))
        } else {
            const cartItems = items.filter(({id}) => id !== ID)
            dispatch(removeItem(cartItems))
        }
    }
}

export default slice.reducer
