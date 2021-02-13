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
                       <img src={logo} alt="logo" style={{marginRight:'5px',width: '30px'}}/>
                       <h1>RAN'DON</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks className="menu" to='/'>
                                Find a Charity
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className="menu" to='/about'>
                                What is RAN'DON?
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className="menu" to='/contact'>
                                Contact Us
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
