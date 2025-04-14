import {useState, useEffect, useContext} from 'react';
import {ContentWidthContext} from "../context/ContentWidthContext";

const useContentWidth = () => {
    const [width, setWidth] = useState(0);
    const aboutRef = useContext(ContentWidthContext);


    useEffect(() => {
        if (!aboutRef.current) {
            return;
        }

        const updateWidth = () => {
            setWidth(aboutRef.current.offsetWidth);
        };

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.target === aboutRef.current) {
                    setWidth(entry.contentRect.width);
                }
            }
        });

        resizeObserver.observe(aboutRef.current);
        updateWidth();
        return () => {
            resizeObserver.disconnect();
        };
    }, [aboutRef]);

    return width;
};

export default useContentWidth;
