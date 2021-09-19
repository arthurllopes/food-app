import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartContainer, CartItem } from './style'
import {removeItem} from'../../store/Cart'

const Cart = ({check}) => {
    const {items, total} = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    function handleRemove(){
        dispatch(removeItem(2))
    }
    console.log(total)
    console.log(items)

    function add(){
        
    }
    function remove(){
        
    }
    return (
        <CartContainer>
            <button onClick={handleRemove}>triplo</button>
            <div>
                <h2>Seu carrinho</h2>
            </div>
            {!(items.length > 0) ? 
            <p>Carrinho vazio</p> :
            <>
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <CartItem key={index}>
                                <div className="qt">
                                    <button onClick={add}>+</button>
                                    <span>{item.qt}</span>
                                    <button onClick={remove}>-</button>
                                </div>
                                <div className="img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="price">
                                    {item.total}
                                </div>
                            </CartItem>
                        ))}
                    </ul>
                </div>
                <div className="total">
                    Total: {total}
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
