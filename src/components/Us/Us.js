import React from 'react';
import dot from "../../assets/dot.svg";
import openQuotes from "../../assets/openQuotes.svg";
import closeQuotes from "../../assets/closeQuotes.svg";
import './Us.css';
import useContentWidth from "../../hooks/useContentWidth";

const Us = ({ isMobile }) => {
    const width = useContentWidth('about-cont');

    return !isMobile ? (
        <div className="us-container" style={{width}}>
            <div className="us-container-body">
                <div className="us-container-header us-container-header--desktop">
                    <img className="dot" src={dot} alt="us-dot" />Кто мы?
                </div>
                <div className="us-container-quote us-container-quote--desktop">
                    <div className="us-quote-start">
                        <img src={openQuotes} alt="us-open-quotes" className="us-open-quotes-desktop" />
                        <div className="us-quote-text">Сложные задачи <span>&mdash;</span></div>
                    </div>
                    <div className="us-quote-end">
                        <span className="us-quote-subtitle">наш источник вдохновения</span>
                        <img className='us-close-quotes-desktop' src={closeQuotes} alt="us-close-quotes" />
                    </div>
                    <div className="us-container-about">
                        Мы — небольшая команда друзей-энтузиастов и программистов, которые обожают решать сложные и
                        нетривиальные задачи. Наша страсть — находить оригинальные решения для самых интересных проектов.
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="us-container us-container-mobile" style={{width}}>
            <div className="us-container-body us-container-body-mobile">
                <div className="us-container-header us-container-header--mobile">
                    <img src={dot} alt="us-dot" /> Кто мы?
                </div>
                <div className="us-container-quote us-container-quote--mobile">
                    <img src={openQuotes} alt="us-open-quotes" className="us-open-quotes-mobile" />
                    <div className="us-quote-text-mobile">Сложные задачи &mdash;</div>
                    <span className="us-quote-subtitle-mobile">наш источник вдохновения</span>
                    <img src={closeQuotes} alt="us-close-quotes" className="us-close-quotes-mobile" />
                </div>
            </div>
            <div className="us-container-about us-container-about-mobile">
                Мы — небольшая команда друзей-энтузиастов и программистов, которые обожают решать сложные и
                нетривиальные задачи. Наша страсть — находить оригинальные решения для самых интересных проектов.
            </div>
        </div>
    );
};

export default Us;
