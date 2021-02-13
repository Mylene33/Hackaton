import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import GetACharity from '../components/getACharity'

const Home  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <NavBar toggle={toggle}/> 
           <h1>You toooooet to donate for a good case but don't know which one ? Ran'don is here to back you up !</h1>

           <GetACharity/>

        </div>
        </>
    )
}

export default Home;