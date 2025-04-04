import React from 'react';
import './Contacts.css';
import dot from "../../assets/whiteDot.svg";

const Contacts = () => {
    return (
        <div id='contacts' className={'contacts-container'}>
            <div className='us-container-header' style={{color: "white", marginTop: "0"}}>
                <img src={dot} alt={'us-dot'}/> Контакты
            </div>
            <div>
                +7 (777) 777-77-77
            </div>
            <div>
                info@purity-flow.ru
            </div>
        </div>
    );
};

export default Contacts;