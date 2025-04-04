import React from 'react';
import './Cases.css';
import dot from "../../assets/dot.svg";

const Cases = ({isMobile}) =>
    (
        !isMobile
            ?
            <div id='cases' className='cases-container'>
                <div className='us-container-header'>
                    <img src={dot} alt={'us-dot'}/> Наши кейсы
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
                        Разработали и внедрили CRM-систему для учета заказов и клиентов, заменившую ручной учет и
                        повысившую
                        эффективность обработки данных.
                    </div>
                    <div className='cases-container-row'>
                        Разработали и внедрили систему учета продукции для завода, заменившую ручные записи и
                        оптимизировавшую производственные процессы.
                    </div>
                    <div className='cases-container-row'>
                        Разработали и внедрили специализированную CRM-систему, заменившую ручную обработку данных в
                        Excel и
                        повысившую скорость работы на 60%.
                    </div>
                    <div className='cases-container-row'>
                        Разработали и внедрили BPM-систему для заведения общепита, заменившую ручные процессы и
                        оптимизировавшую работу персонала.
                    </div>
                </div>
            </div>
            : <div id='cases' className='cases-container-mobile' style={{
                margin: '5rem 1rem'
            }}>
                <div className='us-container-header' style={{
                    marginBottom: "1rem"
                }}>
                    <img src={dot} alt={'us-dot'}/> Наши кейсы
                </div>
                <div className='cases-container-column'>
                    <div className='cases-container-row cases-container-row-mobile'>
                        CRM
                        <br/>для магазина
                        <br/>
                        <br/>
                        <span>Разработали и внедрили CRM-систему для учета заказов и клиентов, заменившую ручной учет и повысившую
                        эффективность обработки данных.</span>
                    </div>
                    <div className='cases-container-row cases-container-row-mobile'>
                        Система учета<br/>производства мочалок
                        <br/>
                        <br/>
                        <span>Разработали и внедрили систему учета продукции для завода, заменившую ручные записи и
                        оптимизировавшую производственные процессы.</span>
                    </div>
                    <div className='cases-container-row cases-container-row-mobile'>
                        CRM для<br/>международной<br/>аудиторской компании
                        <br/>
                        <br/>
                        <span>Разработали и внедрили специализированную CRM-систему, заменившую ручную обработку данных в
                        Excel и
                        повысившую скорость работы на 60%.</span>
                    </div>
                    <div className='cases-container-row cases-container-row-mobile'>
                        BPM-система для<br/>ресторана
                        <br/>
                        <br/>
                        <span>Разработали и внедрили BPM-систему для заведения общепита, заменившую ручные процессы и
                        оптимизировавшую работу персонала.</span>
                    </div>
                </div>
            </div>
    );

export default Cases;