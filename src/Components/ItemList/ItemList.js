import React from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../service/api'
import Item from '../Item/Item'
import { ListContainer } from './style'

const ItemList = () => {
    const {category} = useSelector(state => state.Item)
    const [dados, setDados] = React.useState([])
    React.useEffect(() => {
        api.get(`/${category === 'Pizzas' ? 'pizza' : category}`).then(response => setDados(response.data))
    }, [category])

    return (
        <ListContainer>
            <div className="title">
                <h1>{category}</h1>
            </div>
            {dados && dados.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))}
        </ListContainer>
    )
}

export default ItemList
