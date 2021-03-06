import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartContainer, CartItem } from './style'
import { changeItem} from'../../store/Cart'

const Cart = ({check}) => {
    const {items, total} = useSelector(state => state.Cart)
    const dispatch = useDispatch()

    return (
        <CartContainer>
            <div>
                <h2>Seu carrinho</h2>
            </div>
            {!(items.length > 0) ? 
            <p>Carrinho vazio</p> :
            <>
                <div>
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id}>
                                <div className="qt">
                                    <button id={item.id} onClick={({target}) => dispatch(changeItem(Number(target.id), 'minus'))}>-</button>
                                    <span>{item.qt}</span>
                                    <button id={item.id} onClick={({target}) => dispatch(changeItem(Number(target.id), 'plus'))}>+</button>
                                </div>
                                <div className="img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="price">
                                    {item.total},00
                                </div>
                            </CartItem>
                        ))}
                    </ul>
                </div>
                <div className="total">
                    Total: {total},00
                </div>
                {check &&
                <Link to="checkout">
                    <button className="done">
                        Finalizar Compra
                    </button>
                </Link>
                }
            </>
            }
        </CartContainer>
    )
}

export default Cart
