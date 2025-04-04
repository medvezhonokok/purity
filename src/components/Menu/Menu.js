import React from 'react';
import './Menu.css';
import logo from "./../../assets/logo.svg";

const Menu = ({isMobile}) => {
    return (
        <div className='menu'>
            <img src={logo} alt={'Logo'} style={{
                cursor: 'pointer'
            }} onClick={() => {
                document.getElementById('specialization').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }}/>
            {!isMobile &&
                <>
                    <div className='menu-buttons'>
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
                    <button className='sent-request-menu-button'
                            onClick={() => {
                                document.getElementById('form').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Оставить заявку
                    </button>
                </>
            }
        </div>
    );
};

export default Menu;