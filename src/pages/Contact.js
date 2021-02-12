import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <h1>Contact</h1>
        </div>
    )
}

export default Contact
