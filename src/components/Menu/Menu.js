import React from 'react';
import './Menu.css';
import logo from "./../../assets/logo.svg";
import openMenuButton from "./../../assets/openMenuButton.svg";
import closeMenuButton from "./../../assets/closeMenuButton.svg";
import useContentWidth from "../../hooks/useContentWidth";
import Contacts from "../Contacts/Contacts";

const Menu = ({isMobile, show}) => {
    const [showFullMenu, setShowFullMenu] = React.useState(false);
    const width = useContentWidth();

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

    return (<>
        {isMobile && (<div
            className={`menu-backdrop ${(showFullMenu ? 'active' : '')}`}
            onClick={() => setShowFullMenu(false)}
        />)}
        <div
            className={isMobile && (`menu-mobile ${showFullMenu ? 'fullscreen' : ''} ${show ? '' : 'hidden'}`)}>
            {!showFullMenu ? <div className={!isMobile ? 'menu' : 'menu-mobile'}>
                <div className="menu-content" style={{width}}>
                    <img src={logo} alt={'Logo'} style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                        document.getElementById('specialization').scrollIntoView({
                            behavior: 'smooth', block: 'start'
                        });
                    }}/>
                    {!isMobile ? <>
                        <div className='menu-buttons'>
                            <button className='menu-button'
                                    onClick={() => {
                                        document.getElementById('specialization').scrollIntoView({
                                            behavior: 'smooth', block: 'start'
                                        });
                                    }}>
                                Услуги
                            </button>
                            <button className='menu-button'
                                    onClick={() => {
                                        document.getElementById('cases').scrollIntoView({
                                            behavior: 'smooth', block: 'start'
                                        });
                                    }}>
                                Кейсы
                            </button>
                            <button className='menu-button'
                                    onClick={() => {
                                        document.getElementById('contacts').scrollIntoView({
                                            behavior: 'smooth', block: 'start'
                                        });
                                    }}>
                                Контакты
                            </button>
                        </div>
                        <button className='sent-request-menu-button'
                                onClick={() => {
                                    document.getElementById('form').scrollIntoView({
                                        behavior: 'smooth', block: 'start'
                                    });
                                }}>
                            Оставить заявку
                        </button>
                    </> : showFullMenu ? <img style={{
                        cursor: "pointer"
                    }} src={closeMenuButton} alt={'Close menu'} onClick={() => setShowFullMenu(false)}/> : <img style={{
                        cursor: "pointer"
                    }} src={openMenuButton} alt={'Open menu'} onClick={() => setShowFullMenu(true)}/>}

                </div>
            </div> : <div style={{
                display: "flex", flexDirection: "column", overflowY: 'hidden', justifyContent: "space-between", height: "90%"
            }} className='menu-mobile'>
                <div>
                    <div className='menu-mobile-header'>
                        <img src={logo} alt={'Logo'} style={{
                            cursor: 'pointer'
                        }} onClick={() => {
                            document.body.style.background = '#FAFAFA';
                            document.body.style.overflow = 'auto';
                            setShowFullMenu(false);
                            document.getElementById('specialization').scrollIntoView({
                                behavior: 'smooth', block: 'start'
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
                                        behavior: 'smooth', block: 'start'
                                    });
                                }}>
                            Услуги
                        </button>
                        <button className='menu-button'
                                style={{marginLeft: "0"}}
                                onClick={() => {
                                    setShowFullMenu(false);
                                    document.getElementById('cases').scrollIntoView({
                                        behavior: 'smooth', block: 'start'
                                    });
                                }}>
                            Кейсы
                        </button>
                        <button className='menu-button'
                                style={{marginLeft: "0"}}
                                onClick={() => {
                                    setShowFullMenu(false);
                                    document.getElementById('contacts').scrollIntoView({
                                        behavior: 'smooth', block: 'start'
                                    });
                                }}>
                            Контакты
                        </button>
                    </div>
                    <button className='mobile-button sent-request-menu-button'
                            onClick={() => {
                                setShowFullMenu(false);
                                document.getElementById('form').scrollIntoView({
                                    behavior: 'smooth', block: 'start'
                                });
                            }}>
                        Оставить заявку
                    </button>
                </div>
                <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex', position: 'relative'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                        <div style={{width: 12, height: 12, background: 'var(--Black, #040404)', borderRadius: 9999}}/>
                        <div style={{color: 'var(--Black, #040404)', fontSize: 16, fontWeight: '600', lineHeight: "23.40px"}}>Контакты</div>
                    </div>
                    <a href="tel:+7 (965) 012 4842" style={{all: "unset", color: 'var(--Black, #040404)', fontSize: 17, fontFamily: '"Inter", sans-serif', fontWeight: '300', lineHeight: "23.40px", wordWrap: 'break-word'}}>+7 (965) 012-48-42</a>
                    <a href="mailto:info@purity-flow.ru" style={{all: "unset", color: 'var(--Black, #040404)', fontSize: 18, fontWeight: '400', lineHeight: "23.40px", wordWrap: 'break-word'}}>info@purity-flow.ru</a>
                </div>
            </div>}
        </div>
    </>);
};

export default Menu;