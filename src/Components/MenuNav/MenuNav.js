import React from 'react'
import { MenuContainer, Navbar, NavItem } from './style'
import { NavLink, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../store/Category'
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
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    return (
        <MenuContainer>
            <Navbar>
                {items.map((item, index) => (
                    <NavLink key={index} to={`/${item.slug}`} onClick={() => dispatch(setCategory(item.slug))}>
                        <NavItem pathname={pathname} className={item.slug}>
                            <div>
                                <img src={item.image} alt={item.slug} />
                            </div>
                            <div>
                                <h4>{item.slug}</h4>
                            </div>
                        </NavItem>
                    </NavLink>
                ))}
            </Navbar>
        </MenuContainer>
    )
}

export default MenuNav
