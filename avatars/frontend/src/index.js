import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(// Wrap react App component within the Provider component from redux, to enable: 
// 1. all the crreated react components have access to the redux store!
// 2. thus all those react components will be able to dispatch actions and communicate with the store
// 3. thus react components will be able to grab states from the redux store
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
