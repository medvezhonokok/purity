import React from 'react';
import './About.css';

const About = ({isMobile}) => (
        !isMobile
            ?
            <div id="about" className={'about-article'}>
                <div className="about-container">
                    <div className="about-line about-left">
                        Мы разрабатываем удобные
                    </div>
                    <div className="about-line about-right">
                        <span> и умные <span style={{color: "#1611E7"}}>IT-инструменты</span></span>
                    </div>
                    <div className="about-line about-left">
                        для <span style={{
                        background: "black",
                        color: "white",
                        padding: "0 5px 5px 5px",
                        borderRadius: "1rem"
                    }}>вашего бизнеса</span>
                    </div>
                </div>
            </div>
            : <div id="about" className={'about-article mobile-about'}>
                <div className="about-container">
                    <div className="about-line about-left">
                        Мы{isMobile && <br/>}разрабатываем{isMobile && <br/>}удобные
                    </div>
                    <div className="about-line about-right">
                        <span> и умные</span>
                    </div>
                    <span style={{color: "#1611E7"}}>IT-инструменты</span>
                    <div className="about-line about-left">
                        для{isMobile && <br/>}<span style={{
                        background: "black",
                        color: "white",
                        padding: "0 5px",
                        borderRadius: "1rem"
                    }}>вашего бизнеса</span>
                    </div>
                </div>
            </div>

    )
;

export default About;