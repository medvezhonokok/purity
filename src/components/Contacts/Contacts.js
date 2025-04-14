import React from 'react';
import './Contacts.css';
import dot from "../../assets/whiteDot.svg";
import useContentWidth from "../../hooks/useContentWidth";

const Contacts = ({isMobile}) => {
    const width = useContentWidth();
    return (
        <div id='contacts' className={isMobile ? 'contacts-container-mobile' : 'contacts-container'} style={{width}}>
            <div className='us-container-header' style={{color: "white", marginTop: "0"}}>
                <img className={"dot"} src={dot} alt={'us-dot'}/> Контакты
            </div>
            {isMobile ? <a href="tel:+7 (965) 012 4842" style={isMobile && {all: 'unset',  cursor: "pointer",fontSize: "22px", fontFamily: '"Inter", sans-serif'}}>
                +7 (965) 012 4842
            </a> :
                <div style={{fontFamily: '"Inter", sans-serif'}}>
                    +7 (965) 012 4842
                </div>
            }
            <a href="mailto:info@purity-flow.ru" style={isMobile ? {all: 'unset', fontSize: "24px"} : {all: 'unset', cursor: "pointer"}}>
                info@purity-flow.ru
            </a>
        </div>
    );
};

export default Contacts;