import React from 'react';
import './Footer.css';
import Form from "../Form/Form";
import logo from './../../assets/whiteLogo.svg';
import Contacts from "../Contacts/Contacts";

const Footer = () =>
    (
        <div className='footer-container'>
            <Form/>
            <Contacts/>
            <div className='footer'>
                <img src={logo} alt={'white-logo'}/>
                <div className='footer-buttons'>
                    <button className='menu-button'
                            onClick={() => {
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        О нас
                    </button>
                    <button className='menu-button'
                            onClick={() => {
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Услуги
                    </button>
                    <button className='menu-button'
                            onClick={() => {
                                document.getElementById('cases').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Кейсы
                    </button>
                    <button className='menu-button'
                            onClick={() => {
                                document.getElementById('contacts').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Контакты
                    </button>
                </div>
                <div className='footer-media' style={{color: "white", fontWeight: '400', paddingLeft: "5rem", marginRight: "3rem"}}>
                    СОЦ СЕТИ
                </div>
            </div>
            <footer style={{
                color: "white",
                textAlign: "right",
                marginRight: "10rem",
            }}>
                &copy; PURITYFLOW 2025
            </footer>
        </div>
    );

export default Footer;