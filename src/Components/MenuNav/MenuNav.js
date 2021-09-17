import React from 'react'
import NavItem from '../NavItem/NavItem'
import { MenuContainer, Navbar } from './style'
import pizza from '../../assets/pizza-icon.svg'
import drinks from '../../assets/drinks-icon.svg'
import desserts from '../../assets/desserts-icon.svg'
import combos from '../../assets/combos-icon.svg'
import burguers from '../../assets/burguers-icon.svg'

const MenuNav = () => {
    const items = [
        {slug: 'Burguers',
        image: `${burguers}`,
        },
        {slug: 'Pizzas',
        image: `${pizza}`,
        },
        {slug: 'Combos',
        image: `${combos}`,
        },
        {slug: 'Bebidas',
        image: `${drinks}`,
        },
        {slug: 'Sobremesas',
        image: `${desserts}`,
        }, 
    ]
    return (
        <MenuContainer>
            <Navbar>
                {items.map((item, index) => (
                    <NavItem key={index} item={item} /> 
                ))}
            </Navbar>
        </MenuContainer>
    )
}

export default MenuNav
