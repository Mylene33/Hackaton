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
                    Find a Charity
                    </SideBarLink>
                    <SideBarLink to='/about' onClick={toggle}>
                    What is RAN'DON?
                    </SideBarLink>
                    <SideBarLink to='/contact' onClick={toggle}>
                    Contact Us
                    </SideBarLink>
                    
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
