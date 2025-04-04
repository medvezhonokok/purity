import React from 'react';
import './Cases.css';
import dot from "../../assets/dot.svg";

const Cases = () =>
    (
        <div id='cases' className='cases-container'>
                <div className='us-container-header'>
                    <img src={dot} alt={'us-dot'}/> Кто мы?
                </div>
            <div className='cases-container-column'>
                <div className='cases-container-row'>
                CRM
                    <br/>для магазина
                </div>
                <div className='cases-container-row'>
                    Система учета<br/>производства мочалок
                </div>
                <div className='cases-container-row'>
                    CRM для<br/>международной<br/>аудиторской<br/>компании
                </div>
                <div className='cases-container-row'>
                    BPM-система для<br/>ресторана
                </div>
            </div>
            <div className='cases-container-column'>
                <div className='cases-container-row'>
                    Разработали и внедрили CRM-систему для учета заказов и клиентов, заменившую ручной учет и повысившую
                    эффективность обработки данных.
                </div>
                <div className='cases-container-row'>
                    Разработали и внедрили систему учета продукции для завода, заменившую ручные записи и
                    оптимизировавшую производственные процессы.
                </div>
                <div className='cases-container-row'>
                    Разработали и внедрили специализированную CRM-систему, заменившую ручную обработку данных в Excel и
                    повысившую скорость работы на 60%.
                </div>
                <div className='cases-container-row'>
                    Разработали и внедрили BPM-систему для заведения общепита, заменившую ручные процессы и
                    оптимизировавшую работу персонала.
                </div>
            </div>
        </div>
    );

export default Cases;