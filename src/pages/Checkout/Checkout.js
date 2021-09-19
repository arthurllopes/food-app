import React from 'react'
import { Body } from '../Home/style'
import Cart from '../../Components/Cart/Cart'
import Information from '../../Components/Information/Information'

const Checkout = () => {
    return (
        <Body>
            <Information />
            <Cart check={false} />
        </Body>
    )
}

export default Checkout
