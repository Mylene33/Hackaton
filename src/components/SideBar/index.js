import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarLink, 
    SideBarMenu 
} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/' onClick={toggle}>
                        Home
                    </SideBarLink>
                    <SideBarLink to='/about' onClick={toggle}>
                        About us
                    </SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>
                        Contact
                    </SideBarLink>
                    
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
