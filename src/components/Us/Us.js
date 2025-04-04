import React from 'react';
import dot from "../../assets/dot.svg";
import openQuotes from "../../assets/openQuotes.svg";
import closeQuotes from "../../assets/closeQuotes.svg";
import './Us.css';

const Us = () =>
    (
        <>
            <div className='us-container'>
                <div className='us-container-header' style={{marginTop: "2rem"}}>
                    <img src={dot} alt={'us-dot'}/> Кто мы?
                </div>
                <div className='us-container-quote'>
                    <img style={{
                        paddingBottom: "1rem"
                    }} src={openQuotes} alt={'us-open-quotes'}/>
                    <p style={{marginLeft: "1rem", fontWeight: "800"}}>Сложные задачи &mdash;</p>
                    <span style={{
                        marginTop: "5rem",
                        fontWeight: "500",
                        display: "block",
                        marginRight: "1rem"
                    }}>наш источник вдохновения</span>
                    <img style={{
                        paddingTop: "6rem"
                    }} src={closeQuotes} alt={'us-open-quotes'}/>
                </div>
            </div>
            <div className='us-container-about'>
                Мы — небольшая команда друзей-энтузиастов и программистов, которые обожают решать сложные и нетривиальные задачи. Наша страсть — находить оригинальные решения для самых интересных проектов.
            </div>
        </>
    );

export default Us;