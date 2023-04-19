import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextApi } from './ContextApi';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <ContextApi>
    <App />
    </ContextApi>
    </Provider>
);


reportWebVitals();
