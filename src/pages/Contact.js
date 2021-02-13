import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

import Lottie from 'react-lottie';
import animationData from '../contactus.json'; 

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };


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

            <div>
                  <Lottie 
                  options={defaultOptions}
                  height={300}
                  width={300}
                  />
            </div>


        </div>
    )
}

export default Contact
