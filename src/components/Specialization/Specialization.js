import React from 'react';
import dot from "../../assets/dot.svg";
import programming from "../../assets/programming.svg";
import './Specialization.css';

const Specialization = () => {
    return (
        <div id='specialization' className='specialization-container'>
            <div className='us-container-header'>
                <img src={dot} alt={'us-dot'}/> На чем специализируемся?
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (01)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>Telegram-боты</span><br/>
                    Автоматизируем процессы, создаём интеллектуальных помощников и чат-ботов, которые облегчат рутину и
                    улучшат взаимодействие с клиентами.
                </div>
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (02)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>Telegram Mini-Apps</span><br/>
                    Разрабатываем мини-приложения внутри Telegram, которые позволяют создавать удобные сервисы прямо в
                    мессенджере.
                </div>
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (03)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>Разработка сайтов</span><br/>
                    От лендингов до сложных веб-приложений — создаём быстрые, удобные и красивые сайты, которые работают
                    на ваш бизнес.
                </div>
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (04)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>CRM-системы</span><br/>
                    Помогаем бизнесу управлять клиентами, заказами и процессами с помощью кастомных CRM-решений,
                    созданных специально под ваши задачи.
                </div>
            </div>
            <div className='specialization-container-box' style={{
                border: "none",
                padding: 0
            }}>
                <img
                    src={programming}
                    alt={'programming-image'}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "1rem",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (05)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>AI-решения и интеграции</span><br/>
                    Разрабатываем AI-агентов, умеющих работать с OpenAI API и другими популярными моделями, чтобы
                    автоматизировать аналитику, общение и бизнес-процессы.
                </div>
            </div>
            <div className='specialization-container-box empty-box'>
            </div>
            <div className='specialization-container-box'>
                <div className='specialization-container-box-header'>
                    (06)
                    <img src={dot} alt={'us-dot'}/>
                </div>
                <div className='specialization-container-box-description'>
                    <span className='specialization-container-box-label'>Мобильные приложения</span><br/>
                    Создаём нативные и кроссплатформенные мобильные приложения для iOS и Android. Делаем удобные,
                    быстрые и функциональные решения для вашего бизнеса.
                </div>
            </div>
        </div>
    );
};

export default Specialization;