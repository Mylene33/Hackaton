import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


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
                    Why RAN'DON ? 
                    </h3>
                    <p id="textAbout">
                    <br>
                    </br>2020 was a very tough year. Covid has proven that there is still a lot of injustice in the world. Access to health, the right to housing, the right to education, are fundamental rights. However, many people around the world do not have access to these rights. Worse still, some are using this misery to embezzle money within their association. This observation led us to wonder how the money of the donors could arrive in safe hands. It was at that specific moment that the Ran'Don app was created! We offer a safe platform to honest partners and assure you that your donation will be used wisely!
                        Trust Ran'don and make a meaningful donation! <br>
                   </br> </p>
                </div>
                <img id="imageAbout" src={team1}/>
            </div>
            
            
            <Footer />

            
        </div>
    )
}

export default About
