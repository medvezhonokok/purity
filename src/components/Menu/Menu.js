import React from 'react';
import './Menu.css';
import logo from "./../../assets/logo.svg";
import openMenuButton from "./../../assets/openMenuButton.svg";
import closeMenuButton from "./../../assets/closeMenuButton.svg";

const Menu = ({isMobile, show}) => {
    const [showFullMenu, setShowFullMenu] = React.useState(false);

    React.useEffect(() => {
        if (showFullMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showFullMenu]);

    return (
        <>
            {isMobile && (
                <div
                    className={`menu-backdrop ${showFullMenu ? 'active' : ''}`}
                    onClick={() => setShowFullMenu(false)}
                />
            )}
            <div
                className={isMobile && (`menu-mobile ${showFullMenu ? 'fullscreen' : ''} ${show ? '' : 'hidden'}`)}>
                {!showFullMenu
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
                            : showFullMenu
                                ? <img style={{
                                    cursor: "pointer"
                                }} src={closeMenuButton} alt={'Close menu'} onClick={() => setShowFullMenu(false)}/>
                                : <img style={{
                                    cursor: "pointer"
                                }} src={openMenuButton} alt={'Open menu'} onClick={() => setShowFullMenu(true)}/>
                        }
                    </div>
                    : <div style={{
                        display: "flex",
                        flexDirection: "column",
                        overflowY: 'hidden'
                    }} className='menu-mobile'>
                        <div className='menu-mobile-header'>
                            <img src={logo} alt={'Logo'} style={{
                                cursor: 'pointer'
                            }} onClick={() => {
                                document.body.style.background = '#FAFAFA';
                                document.body.style.overflow = 'auto';
                                setShowFullMenu(false);
                                document.getElementById('specialization').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}/>
                            <img style={{
                                cursor: "pointer"
                            }} src={closeMenuButton} alt={'Close menu'} onClick={() => setShowFullMenu(false)}/>
                        </div>
                        <div className='menu-mobile-buttons menu-buttons'>
                            <button className='menu-button'
                                    style={{marginLeft: "0"}}
                                    onClick={() => {
                                        setShowFullMenu(false);
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
                                        setShowFullMenu(false);
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
                                        setShowFullMenu(false);
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
                                    setShowFullMenu(false);
                                    document.getElementById('form').scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}>
                            Оставить заявку
                        </button>
                    </div>}
            </div>
        </>
    );
};

export default Menu;