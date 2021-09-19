import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector} from 'react-redux'
import { newItems } from '../../store/Category'
import Item from '../Item/Item'
import { ListContainer } from './style'

const ItemList = () => {
    const dispatch = useDispatch()
    const {category, items} = useSelector(state => state.Category)

    React.useEffect(() => {
        dispatch(newItems(category))
    }, [category, dispatch])

    return (
        <ListContainer>
            <div className="title">
                <h1>{category}</h1>
            </div>
            {items && items.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))}
        </ListContainer>
    )
}

export default ItemList
