import React from 'react';
import './About.css';

const About = () =>
    (
        <div id="about" className='about-article'>
            Мы разрабатываем удобные
            <span style={{
                display: "block",
                marginLeft: "10rem"
            }}> и умные <span style={{
                color: "#1611E7"
            }}>IT-инструменты</span>
            </span>
            для <span style={{
            background: "black",
            color: "white",
            padding: "0 5px 5px 5px",
            borderRadius: "1rem"
        }}>вашего бизнеса</span>
        </div>
    );

export default About;