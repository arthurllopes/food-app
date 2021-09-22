import React from 'react'
import {PaymentOptionContainer} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setPayment } from '../../store/Order'
import Input from '../Input/Input';

const PaymentOption = () => {
    const dispatch = useDispatch()
    const {total} = useSelector(state => state.Cart)
    const {payment} = useSelector(state => state.Order.info)
    return (
        <PaymentOptionContainer>
            <h3>Pagamento</h3>
            <div className="paymentChoice">
                <label>
                    <input name="payment" type="radio" value="card" required onChange={({ target }) => dispatch(setPayment({method: target.value}))} />
                    Cartão
                </label>
                <label>
                    <input name="payment" type="radio" value="cash" onChange={({ target }) => dispatch(setPayment({method: target.value}))} />
                    Dinheiro
                </label>
            </div>
            {payment === "cash" &&
            <>
                <p>Precisa de troco? Se sim, diga para quanto</p>
                <Input name="change" type="number" placeholder="Valor" onBlur={({target}) => dispatch(setPayment({method: "cash", value: target.value, total}))} /> 
            </>}

        </PaymentOptionContainer>
    )
}

export default PaymentOption
