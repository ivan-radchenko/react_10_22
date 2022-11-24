import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux'
import {store} from './store/store'

import {GlobalProvider} from './context/GlobalContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <GlobalProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalProvider>
    </Provider>
);
