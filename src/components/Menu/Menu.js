import React from 'react';
import './Menu.css';
import logo from "./../../assets/logo.svg";
import openMenuButton from "./../../assets/openMenuButton.svg";
import closeMenuButton from "./../../assets/closeMenuButton.svg";
import dot from "../../assets/dot.svg";

const Menu = ({isMobile}) => {
    const [showMenu, setShowMenu] = React.useState(false);
    React.useEffect(() => {
        if (showMenu) {
            document.body.style.background = 'white';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.background = '#FAFAFA';
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.background = '#FAFAFA';
            document.body.style.overflow = 'auto';
        };
    }, [showMenu]);

    return (
        !showMenu
            ?
            <div className={!isMobile ? 'menu' : 'menu-mobile'}>
                <img src={logo} alt={'Logo'} style={{
                    cursor: 'pointer'
                }} onClick={() => {
                    document.getElementById('specialization').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }}/>
                {!isMobile
                    ? <>
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
                    : <img style={{
                        cursor: "pointer"
                    }} src={openMenuButton} alt={'Open menu'} onClick={() => setShowMenu(true)}/>
                }
            </div>
            : <div style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                overflowY: 'hidden'
            }} className='menu-mobile'>
                <div className='menu-mobile-header'>
                    <img src={logo} alt={'Logo'} style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                        document.getElementById('specialization').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}/>
                    <img style={{
                        cursor: "pointer"
                    }} src={closeMenuButton} alt={'Close menu'} onClick={() => setShowMenu(false)}/>
                </div>
                <div className='menu-mobile-buttons menu-buttons'>
                    <button className='menu-button'
                            style={{marginLeft: "0"}}
                            onClick={() => {
                                setShowMenu(false);
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Услуги
                    </button>
                    <button className='menu-button'
                            style={{marginLeft: "0"}}
                            onClick={() => {
                                setShowMenu(false);
                                document.getElementById('cases').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Кейсы
                    </button>
                    <button className='menu-button'
                            style={{marginLeft: "0"}}
                            onClick={() => {
                                setShowMenu(false);
                                document.getElementById('contacts').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}>
                        Контакты
                    </button>
                </div>
                <button className='mobile-button sent-request-menu-button'
                        onClick={() => {
                            setShowMenu(false);
                            document.getElementById('form').scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}>
                    Оставить заявку
                </button>
                <div className='menu-contacts-mobile'>
                    <div className='us-container-header'
                         style={{marginTop: "2rem", width: "30%", display: 'flex', gap: "1rem"}}>
                        <img src={dot} alt={'us-dot'}/> Контакты
                    </div>
                    <span style={{fontSize: "18px", fontWeight: "400", position: "absolute", margin: "2rem 0"}}>+7 (777) 777-77-77</span>
                    <br/>
                    <span style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        position: "absolute",
                        margin: "4rem 0"
                    }}>info@purity-flow.ru</span>
                </div>
            </div>
    );
};

export default Menu;