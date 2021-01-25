import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import store from './modules/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={"/"}>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

