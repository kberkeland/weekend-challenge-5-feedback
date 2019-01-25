import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelings = (state = 0, action) => {
    return state;
}

const understanding = (state = 0, action) => {
    return state;
}

const support = (state = 0, action) => {
    return state;
}

const comments = (state = 0, action) => {
    return state;
}

// allows the Redux store to be used in all components
const storeInstance = createStore(
    // combines all reducers into one
    combineReducers({
        feelings,
        understanding,
        support,
        comments
    }),
    // allows me to use redux-logger in the browser inspect window
    applyMiddleware(logger),

);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();