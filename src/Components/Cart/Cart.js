import React from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './style'

const Cart = () => {
    return (
        <CartContainer>
            <div>
                <h2>Seu carrinho: </h2>
            </div>
            <div>
                <Link to="checkout">
                    <button>
                        Finalizar Compra
                    </button>
                </Link>
            </div>

        </CartContainer>
    )
}

export default Cart
