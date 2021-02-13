import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

import idea from '../image/idea.png'
import team1 from '../image/team1.png'



const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            
            
            <div className="ContainerAboutTop">
                <img id="imageAbout" src={idea}/>
                <div id="testAbout">
                    <h3 id="titleAbout">
                    What is RAN'DON?
                    </h3>
                    <p id="textAbout">
                    RAN'DON was born in 2021 on the occasion of a hackaton. 
                    <br>
                    </br>Three junior front-end developpers Yousra, Mylene and Tom were challenged by the twilio company to build a not for profit application in only 24 hours. <br></br>
                    The trio came with the idea of Ran'don whithin a few seconds. It was obvious ! <br>
                    </br>What about creating a very simple app that helps people to decide on which charity they’ll make a donation?
                    </p>
                </div>
            </div>

            <div className="ContainerAboutBottom">
                <div id="testAbout">
                    <h3 id="titleAbout">
                    What is RAN'DON?
                    </h3>
                    <p id="textAbout">
                    RAN'DON was born in 2021 on the occasion of a hackaton. 
                    <br>
                    </br>Three junior front-end developpers Yousra, Mylene and Tom were challenged by the twilio company to build a not for profit application in only 24 hours. <br></br>
                    The trio came with the idea of Ran'don whithin a few seconds. It was obvious ! <br>
                    </br>What about creating a very simple app that helps people to decide on which charity they’ll make a donation?
                    </p>
                </div>
                <img id="imageAbout" src={team1}/>
            </div>
            
            
            
            
        </div>
    )
}

export default About
