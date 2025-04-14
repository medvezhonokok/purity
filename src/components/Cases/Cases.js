import React from 'react';
import './Cases.css';
import dot from "../../assets/dot.svg";
import useContentWidth from "../../hooks/useContentWidth";

const casesContent = {
    header: "Наши кейсы",
    cases: [
        {
            title: ["CRM", "для магазина"],
            description:
                "Разработали и внедрили CRM-систему для учета заказов и клиентов, заменившую ручной учет и повысившую эффективность обработки данных."
        },
        {
            title: ["Система учета", "производства мочалок"],
            description:
                "Разработали и внедрили систему учета продукции для завода, заменившую ручные записи и оптимизировавшую производственные процессы."
        },
        {
            title: ["CRM для", "международной", "аудиторской", "компании"],
            description:
                "Разработали и внедрили специализированную CRM-систему, заменившую ручную обработку данных в Excel и повысившую скорость работы на 60%."
        },
        {
            title: ["BPM-система для", "ресторана"],
            description:
                "Разработали и внедрили BPM-систему для заведения общепита, заменившую ручные процессы и оптимизировавшую работу персонала."
        },
    ],
};

const Cases = ({ isMobile }) => {
    const width = useContentWidth();

    const renderTitle = (lines) =>
        lines.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index !== lines.length - 1 && <br />}
            </React.Fragment>
        ));

    if (!isMobile) {
        return (
            <div id="cases" className="cases-container" style={{ width }}>
                <div className="us-container-header">
                    <img className="dot" src={dot} alt="us-dot" />{casesContent.header}
                </div>
                <div className="cases-container-column">
                    {casesContent.cases.map((item, index) => (
                        <div key={index} className="cases-container-row">
                            {renderTitle(item.title)}
                        </div>
                    ))}
                </div>
                <div className="cases-container-column">
                    {casesContent.cases.map((item, index) => (
                        <div key={index} className="cases-container-row">
                            {item.description}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div
            id="cases"
            className="cases-container-mobile"
            style={{ width }}
        >
            <div className="us-container-header" style={{ marginBottom: "1rem" }}>
                <img src={dot} alt="us-dot" /> {casesContent.header}
            </div>
            <div className="cases-container-column mobile">
                {casesContent.cases.map((item, index) => (
                    <div key={index} className="cases-container-row cases-container-row-mobile">
                        {renderTitle(item.title)}
                        <br />
                        <br />
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cases;
