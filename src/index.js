import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const initialFeelings = 0;
const feelings = (state = initialFeelings, action) => {
    if(action.type === 'SET_FEELINGS') {
        return action.payload;
    } else if( action.type === 'RESET') {
        return initialFeelings;
    }
    return state;
}

const initialUnderstanding = 0;
const understanding = (state = initialUnderstanding, action) => {
    if(action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if( action.type === 'RESET') {
        return initialUnderstanding;
    }
    return state;
}

const initialSupport = 0;
const support = (state = initialSupport, action) => {
    if(action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if( action.type === 'RESET') {
        return initialSupport;
    }
    return state;
}

const initialComments = { check: false,
                          comments: '' };
const comments = (state = initialComments, action) => {
    if(action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if( action.type === 'RESET') {
        return initialComments;
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