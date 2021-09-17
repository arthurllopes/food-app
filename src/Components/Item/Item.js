import React from 'react'
import { ItemContainer } from './style'

const Item = ({item}) => {
    return (
        <ItemContainer>
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
