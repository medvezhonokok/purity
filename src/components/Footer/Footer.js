import React from 'react';
import './Footer.css';
import Form from "../Form/Form";
import logo from './../../assets/whiteLogo.svg';
import Contacts from "../Contacts/Contacts";

const Footer = ({isMobile}) =>
    (
        <div className={'footer-container '}>
            <Form isMobile={isMobile}/>
            <Contacts isMobile={isMobile}/>
            <div className='footer' style={isMobile && {
                flexDirection: "column",
                borderTop: "2px solid white",
                justifyContent: "space-between",
                margin: "5rem 1rem",
                display: "flex",
                padding: "2rem 0",
                position: 'static'
            }}>
                <img src={logo} alt={'white-logo'}/>
                <div className='footer-buttons' style={isMobile && {
                    width: "fit-content",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    fontSize: "18px"
                }}>
                    <button className='menu-button'
                            style={isMobile && {fontSize: "18px"}}
                            onClick={() => {
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        О нас
                    </button>
                    <button className='menu-button'
                            style={isMobile && {fontSize: "18px"}}
                            onClick={() => {
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Услуги
                    </button>
                    <button className='menu-button'
                            style={isMobile && {fontSize: "18px"}}
                            onClick={() => {
                                document.getElementById('cases').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Кейсы
                    </button>
                    <button className='menu-button'
                            style={isMobile && {fontSize: "18px"}}
                            onClick={() => {
                                document.getElementById('contacts').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Контакты
                    </button>
                </div>
                <div className='footer-media'
                     style={!isMobile
                         ? {color: "white", fontWeight: '400', paddingLeft: "5rem", marginRight: "3rem"}
                         : {color: "white", fontWeight: '400', textAlign: "left", paddingLeft: '6px', marginTop: "3rem"}
                     }>
                    СОЦ СЕТИ
                </div>
            </div>
            <footer style={!isMobile
                ? {
                    color: "white",
                    textAlign: "right",
                    marginRight: "10rem",
                }
                : {
                    color: "white",
                    textAlign: "right",
                    marginRight: "2rem",
                    paddingBottom: "2rem",
                }
            }>
                &copy; PURITYFLOW 2025
            </footer>
        </div>
    );

export default Footer;