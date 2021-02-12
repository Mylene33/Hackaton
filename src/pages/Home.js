import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Card from '../components/Card/Card';


const Home  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <NavBar toggle={toggle}/> 
           <h1>Home</h1>

           <Card/>


        </>
    )
}

export default Home 
