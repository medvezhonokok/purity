import React from 'react';
import './Contacts.css';
import dot from "../../assets/whiteDot.svg";

const Contacts = ({isMobile}) => {
    return (
        <div id='contacts' className={isMobile ? 'contacts-container-mobile' : 'contacts-container'}>
            <div className='us-container-header' style={{color: "white", marginTop: "0"}}>
                <img src={dot} alt={'us-dot'}/> Контакты
            </div>
            <div style={isMobile && {fontSize: "24px"}}>
                +7 (965) 012 4842
            </div>
            <div style={isMobile && {fontSize: "24px"}}>
                info@purity-flow.ru
            </div>
        </div>
    );
};

export default Contacts;