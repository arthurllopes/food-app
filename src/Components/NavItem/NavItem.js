import React from 'react'
import { Item } from './style'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setItem } from '../../store/Item'

const NavItem = ({item}) => {
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(setItem(item.slug))
    }
    return (
        <NavLink onClick={handleClick} to={`/${item.slug}`} activeStyle={{backgroundColor: '#ffe552', borderRadius: '8px'}}>
            <Item>
                <div>
                    <img src={item.image} alt={item.slug} />
                </div>
                <div>
                    <h4>{item.slug}</h4>
                </div>
            </Item>
        </NavLink>
    )
}

export default NavItem
