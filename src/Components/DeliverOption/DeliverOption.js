import React from 'react'
import { DeliverOptionContainer } from './style'
import { useSelector, useDispatch} from 'react-redux'
import { setDeliver, setInfo } from '../../store/Order'
import AddressSet from '../AddressSet/AddressSet'

const DeliverOption = () => {
    const {deliver} = useSelector(state => state.Order)
    const dispatch = useDispatch()
    function handleChange(target){
        if (target.value === "take-away") {
            dispatch(setDeliver(target.value))
            dispatch(setInfo({}))
        } else {
            dispatch(setDeliver(target.value))
        }
    }
    return (
        <DeliverOptionContainer>
            <div className="deliverChoice">
                <label>
                    <input name="deliver" required type="radio" value="take-away" onChange={({ target }) => handleChange(target)} />
                    Retirar na loja
                </label>
                <label>
                    <input name="deliver" type="radio" value="delivery" onChange={({ target }) => handleChange(target)} />
                    Delivery
                </label>
            </div>
            {deliver === 'delivery' &&
                <AddressSet />
            }
        </DeliverOptionContainer>
    )
}

export default DeliverOption
