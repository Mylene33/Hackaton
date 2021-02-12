import React from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements'
import { FaBars } from 'react-icons/fa';
import logo from './logo.png'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'> 
                       <img src={logo} alt="logo" style={{marginRight:'30px',width: '70px', borderRadius: '5px'}}/>
                       <h1>Ran'Don</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>
                                About us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact'>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
