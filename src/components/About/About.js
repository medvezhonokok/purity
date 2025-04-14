import React, {useContext} from 'react';
import './About.css';
import {ContentWidthContext} from "../../context/ContentWidthContext";

const About = ({isMobile}) => {
    const aboutRef = useContext(ContentWidthContext);

    return (!isMobile
        ?
        <div id="about" className={'about-article'}>
            <div ref={aboutRef} className="about-container">
                <div className="about-line about-left">
                    Мы разрабатываем удобные
                </div>
                <div className="about-line about-right">
                    <span> и умные <span style={{color: "#1611E7"}}>IT-инструменты</span></span>
                </div>
                <div className="about-line about-left">
                    для
                    <span id="rect"> вашего бизнеса</span>
                </div>
            </div>
        </div>
        : <div id="about" className={'about-article mobile-about'}>
            <div ref={aboutRef}  className="about-container">
                <div className="about-line about-left">
                    Мы{isMobile && <br/>}разрабатываем{isMobile && <br/>}удобные
                </div>
                <div className="about-line about-right">
                    <span> и умные</span>
                </div>
                <span style={{color: "#1611E7"}}>IT-инструменты</span>
                <div className="about-line about-left">
                    для
                    {isMobile && <br/>}
                    <span className="rect">вашего бизнеса</span>
                </div>
            </div>
        </div>
    )
}


export default About;