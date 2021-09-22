import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Order',
    initialState: {
        items: [],
        total: 0,
        user: {},
        deliver: '',
        info: {
            address: null,
            payment: '',
            change: ''
        }
    },
    reducers: {
        setOrder(state, action){
            state.items = [...action.payload.items]
            state.total = action.payload.total
            state.info.change = state.info.change - state.total
            state.user = {name: action.payload.user.name, phone: action.payload.user.phone}
        },
        setAddress(state, action){
            state.info.address = {...state.info.address, ...action.payload}
        },
        setDeliver(state, action){
            state.deliver = action.payload
        },
        setPayment(state, action){
            state.info.payment = action.payload.method
            state.info.change = action.payload.value
            state.total = action.payload.total
        },
        setInfo(state, action){
            state.info = action.payload
        }
    }
})

export const fetchCEP = (cep) => async (dispatch) => {
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await response.json();
        return dispatch(setAddress({
            street: json.logradouro,
            city: json.localidade,
            district: json.bairro,
            state: json.uf,
            zipCode: json.cep
        }))
    } catch (error){
        dispatch(setAddress({error: 'Cep inválido'}))
    }

}


export const {setOrder, setAddress, setDeliver, setPayment, setInfo} = slice.actions

export default slice.reducer
