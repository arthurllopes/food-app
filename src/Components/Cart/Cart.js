import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartContainer, CartItem } from './style'
import {plusQt, minusQt, removeItem} from'../../store/Cart'

const Cart = ({check}) => {
    const {items, total} = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    
    function addQt(target){
        const ID = Number(target.id)
        const indexItem = items.map(({id}) => id).indexOf(ID);
        const selectedItem = items[indexItem]
        const quantity = selectedItem.qt + 1
        const itemTotal = selectedItem.price * quantity
        console.log(itemTotal)
        const state = {...selectedItem, qt: quantity, total: itemTotal}
        dispatch(plusQt({index: indexItem, state: state}))
    }
    function remove(target){
        const ID = Number(target.id)
        const indexItem = items.map(({id}) => id).indexOf(ID);
        if(items[indexItem].qt > 1){
            const selectedItem = items[indexItem]
            const quantity = selectedItem.qt - 1
            const itemTotal = selectedItem.price * quantity
            const state = {...selectedItem, qt: quantity, total: itemTotal}
            dispatch(minusQt({index: indexItem, state: state}))
        } else {
            dispatch(removeItem(ID))
        }
    }
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
                                    <button id={item.id} onClick={({target}) => remove(target)}>-</button>
                                    <span>{item.qt}</span>
                                    <button id={item.id} onClick={({target}) => addQt(target)}>+</button>
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
