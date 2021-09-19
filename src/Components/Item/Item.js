import React from 'react'
import { ItemContainer } from './style'
import {useDispatch} from 'react-redux'
import {setCart, setTotal} from '../../store/Cart'
import { useSelector } from 'react-redux'

const Item = ({item}) => {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.Cart)

    const addValue = (items) => {
        const value = items.reduce((acc, item) => acc + item.total, 0)
        return value
    }
    function handleClick(){
        dispatch(setCart({...item, qt: 1, total: item.price}))
        dispatch(setTotal(addValue(items)))
    }
    return (
        <ItemContainer onClick={handleClick}>
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
