import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextApi } from './ContextApi';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextApi>
    <App />
    </ContextApi>
);


reportWebVitals();
