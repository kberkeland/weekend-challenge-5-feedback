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
    if(action.type === 'SET_FEELINGS') {
        // convert the incoming string to a number
        let newState = Number(action.payload)
        return newState;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING') {
        // convert the incoming string to a number
        let newState = Number(action.payload)
        return newState;
    }
    return state;
}

const support = (state = 0, action) => {
    if(action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const comments = (state = '', action) => {
    if(action.type === 'SET_COMMENTS') {
        return action.payload;
    }
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