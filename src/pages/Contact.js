import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const Contact = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 

            <h2 className='contact'>If you have any question or the intention to be part of the RAN'DON team, please contact us. Cheers ! </h2>
            <a className='link' href="mailto:info@randon.com">info@randon.com</a> 
            <Footer/>           
        </div>
    )
}

export default Contact
