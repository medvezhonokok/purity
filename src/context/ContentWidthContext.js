import React, { createContext, useRef } from 'react';


export const ContentWidthContext = createContext(null);

export const ContentWidthProvider = ({ children }) => {
    const aboutRef = useRef(null);

    return (
        <ContentWidthContext.Provider value={aboutRef}>
            {children}
        </ContentWidthContext.Provider>
    );
};
