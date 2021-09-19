import React from 'react'
import Cart from '../../Components/Cart/Cart'
import ItemList from '../../Components/ItemList/ItemList'
import MenuNav from '../../Components/MenuNav/MenuNav'
import { Body } from './style'

const Home = () => {
    return (
        <>
        <MenuNav />
        <Body>
            <ItemList/>
            <Cart check={true} />
        </Body>
        </>
    )
}

export default Home
