import React from 'react';
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Us from "../components/Us/Us";
import Specialization from "../components/Specialization/Specialization";
import Cases from "../components/Cases/Cases";
import Footer from "../components/Footer/Footer";

const MobileLayout = () => {
    return (
        <div style={{
            overflowX: 'hidden'
        }}>
            <Menu isMobile={true}/>
            <About isMobile={true}/>
            <Us isMobile={true}/>
            <Specialization isMobile={true}/>
            <Cases isMobile={true}/>
            <Footer isMobile={true}/>
        </div>
    );
};

export default MobileLayout;