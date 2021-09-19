import styled from "styled-components";

export const MenuContainer = styled.nav`
    margin: 0 auto;
    background-color: white;
    border-radius: 18px;
`
export const Navbar = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    background-color: transparent;
    padding: 8px;
`
export const NavItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    width: 150px;
    border-radius: 8px;

    h4{
        color: #848484;;
    }
    &.Burguers{
        background-color: ${({pathname}) => pathname === "/" ? '#ffe552' : ''};
    }
`
