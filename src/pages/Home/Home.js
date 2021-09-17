import React from 'react'
import { Link } from 'react-router-dom'
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
            <Cart />
        </Body>

        <button>
            <Link to="checkout">
            finalizar
            </Link>
        </button>
        </>
    )
}

export default Home
