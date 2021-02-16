import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Lottie from 'react-lottie'
import animationData from '../underconstruction.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const WorkInProgress = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <div className='container-wip'>
                <h1 className='title-wip'>Oops 👼  this page is currently under construction</h1>
                <h2 className='subtitle-wip'>Please come back later</h2>

                <Lottie
                    options={defaultOptions}
                    height={350}
                    width={350}
                />
            </div>
            <Footer className='footer-wip' />
        </>
    )
}

export default WorkInProgress
