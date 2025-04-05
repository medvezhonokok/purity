import './App.css';
import {useDevice} from "./hooks/useDevice";
import MobileLayout from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";
import {useEffect, useState, useRef} from "react";

function App() {
    const {isMobile} = useDevice();
    const [showMenu, setShowMenu] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
                setShowMenu(false);
            } else if (currentScrollY < lastScrollY.current) {
                setShowMenu(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    return isMobile ? <MobileLayout showMenu={showMenu}/> : <DesktopLayout/>;
}

export default App;