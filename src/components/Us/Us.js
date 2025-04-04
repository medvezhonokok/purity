import React from 'react';
import dot from "../../assets/dot.svg";
import openQuotes from "../../assets/openQuotes.svg";
import closeQuotes from "../../assets/closeQuotes.svg";
import './Us.css';

const Us = ({isMobile}) =>
    (
        !isMobile
            ? <div className='us-container'>
                <div className='us-container-body'>
                    <div className={'us-container-header'} style={{marginTop: "2rem", width: "30%"}}>
                        <img src={dot} alt={'us-dot'}/> Кто мы?
                    </div>
                    <div className='us-container-quote' style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignSelf: "flex-start",
                        }}>
                            <img style={{paddingBottom: "1rem"}} src={openQuotes} alt={'us-open-quotes'}/>
                            <p style={{marginLeft: "1rem", fontWeight: "800"}}>Сложные задачи &mdash;</p>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignSelf: "flex-end",
                            marginTop: "-2rem"
                        }}>
        <span style={{fontWeight: "500", display: "block", marginRight: "1rem"}}>
            наш источник вдохновения
        </span>
                            <img src={closeQuotes} alt={'us-open-quotes'}/>
                        </div>
                    </div>
                </div>
                <div className='us-container-about'>
                    Мы — небольшая команда друзей-энтузиастов и программистов, которые обожают решать сложные и
                    нетривиальные задачи. Наша страсть — находить оригинальные решения для самых интересных проектов.
                </div>
            </div>
            : <div className='us-container us-container-mobile'>
                <div className='us-container-body us-container-body-mobile'>
                    <div className={'us-container-header'} style={{marginTop: "2rem", width: "40%"}}>
                        <img src={dot} alt={'us-dot'}/> Кто мы?
                    </div>
                    <div className='us-container-quote' style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "26px",
                        position: "relative"
                    }}>
                        <img style={{width: "32px", height: "25px"}} src={openQuotes} alt={'us-open-quotes'}/>
                        <p style={{fontWeight: "800", margin: '0'}}>Сложные задачи &mdash;</p>
                        <span style={{fontWeight: "500", textAlign: "right"}}>наш источник вдохновения</span>
                        <img style={{width: "32px", height: "25px", position: "absolute", right: "0", bottom: "-2rem"}} src={closeQuotes} alt={'us-open-quotes'}/>
                    </div>
                </div>
                <div className='us-container-about'  style={{
                    fontSize: "18px",
                    marginTop: "3.5rem",
                    width: '100%'
                }}>
                    Мы — небольшая команда друзей-энтузиастов и программистов, которые обожают решать сложные и
                    нетривиальные задачи. Наша страсть — находить оригинальные решения для самых интересных проектов.
                </div>
            </div>
    );

export default Us;