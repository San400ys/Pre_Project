import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Global from "./Global";
import { Provider } from "react-redux";
import {store} from "./Store/Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Global/>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);