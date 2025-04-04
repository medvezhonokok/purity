import React from 'react';
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Us from "../components/Us/Us";
import Specialization from "../components/Specialization/Specialization";
import Cases from "../components/Cases/Cases";
import Footer from "../components/Footer/Footer";

const MobileLayout = () => {
    return (
        <>
            <Menu isMobile={true}/>
            <About/>
            <Us/>
            <Specialization/>
            <Cases/>
            <Footer/>
        </>
    );
};

export default MobileLayout;