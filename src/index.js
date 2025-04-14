import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ContentWidthProvider} from "./context/ContentWidthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ContentWidthProvider>
            <App/>
        </ContentWidthProvider>
    </React.StrictMode>
);

