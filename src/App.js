import './App.css';
import {useDevice} from "./hooks/useDevice";
import MobileLayout from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";

function App() {
    const {isMobile} = useDevice();
    return isMobile ? <MobileLayout/> : <DesktopLayout/>;
}

export default App;
