import React from 'react'
import { ItemContainer } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, changeItem } from '../../store/Cart'

const Item = ({item}) => {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.Cart)
    function handleClick(){
        const cartItemsID = items.map((item) => item.id)
        const onCart = cartItemsID.includes(item.id)
        if(onCart){
            dispatch(changeItem(item.id, 'plus'))
        } else {
            dispatch(setCart({...item, qt: 1, total: item.price}))
        }
    }
    return (
        <ItemContainer className={item.onCart === true && "disable"} onClick={handleClick}>
            {item.offer && <div className="offer"><p>Oferta</p></div>}
            <div>
                <img src={item.img} alt={item.title} />
            </div>
            <div>
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
                <p className="price">R$ {item.price},00</p>
            </div>
        </ItemContainer>

    )
}

export default Item
