import React from 'react';
import dot from "../../assets/dot.svg";
import programmingImg from "../../assets/programming.svg";
import './Specialization.css';
import useContentWidth from "../../hooks/useContentWidth";

const SpecializationBox = ({number, label, description}) => (
    <div className="specialization-container-box">
        <div className="specialization-container-box-header">
            ({number})
            <img src={dot} alt="dot icon"/>
        </div>
        <div className="specialization-container-box-description">
            <span className="specialization-container-box-label">{label}</span>
            <br/>
            {description}
        </div>
    </div>
);

const Specialization = ({isMobile}) => {
    const width = useContentWidth();
    return <div
        id="specialization"
        className={isMobile ? "specialization-container-mobile" : "specialization-container"}
        style={{width}}
    >
        <div className="us-container-header">
            <img className="dot" src={dot} alt="dot icon"/> На чем специализируемся?
        </div>

        <SpecializationBox
            number="01"
            label="Telegram-боты"
            description="Автоматизируем процессы, создаём интеллектуальных помощников и чат-ботов, которые облегчат рутину и улучшат взаимодействие с клиентами."
        />
        <SpecializationBox
            number="02"
            label="Telegram Mini-Apps"
            description="Разрабатываем мини-приложения внутри Telegram, которые позволяют создавать удобные сервисы прямо в мессенджере."
        />
        <SpecializationBox
            number="03"
            label="Разработка сайтов"
            description="От лендингов до сложных веб-приложений — создаём быстрые, удобные и красивые сайты, которые работают на ваш бизнес."
        />
        <SpecializationBox
            number="04"
            label="CRM-системы"
            description="Помогаем бизнесу управлять клиентами, заказами и процессами с помощью кастомных CRM-решений, созданных специально под ваши задачи."
        />

        <div
            className="specialization-container-box"
            style={{border: "none", padding: 0}}
        >
            <img
                src={programmingImg}
                alt="programming image"
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                    objectFit: "cover",
                    display: "block",
                }}
            />
        </div>

        <SpecializationBox
            number="05"
            label="AI-решения и интеграции"
            description="Разрабатываем AI-агентов, умеющих работать с OpenAI API и другими популярными моделями, чтобы автоматизировать аналитику, общение и бизнес-процессы."
        />

        {!isMobile && <div className="specialization-container-box empty-box"/>}

        <SpecializationBox
            number="06"
            label="Мобильные приложения"
            description="Создаём нативные и кроссплатформенные мобильные приложения для iOS и Android. Делаем удобные, быстрые и функциональные решения для вашего бизнеса."
        />
    </div>

};

export default Specialization;
