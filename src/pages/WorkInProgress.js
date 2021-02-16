import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
            </div>
            <Footer />
        </>
    )
}

export default WorkInProgress
