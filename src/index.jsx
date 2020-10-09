import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import returnStoreAndPersistor from './store'

import './assets/css/index.css';
import App from './views/App';

const { store } = returnStoreAndPersistor()

const target = document.querySelector('#root')

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    target
);
