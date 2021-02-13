import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <h1>About Us</h1>
            <p style={{color: 'black'}}>
                randon was born in 2021 on the occasion of a hackaton. Three junior front-end developpers Yousra, Mylene and Tom were challenged by the twilio company to build a not for profit application in only 24 hours. 
                The trio came with the idea of Ran'don whithin a few seconds. It was obvious ! What about creating a very simple app that helps people to decide on which charity they’ll make a donation!
                 </p>
        </div>
    )
}

export default About
