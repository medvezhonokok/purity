import './App.css';
import {useDevice} from "./hooks/useDevice";
import MobileLayout from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";
import {useEffect} from "react";

function App() {
    const {isMobile} = useDevice();
    useEffect(() => {
        console.log(isMobile);
    }, []);
    return isMobile ? <MobileLayout/> : <DesktopLayout/>;
}

export default App;
