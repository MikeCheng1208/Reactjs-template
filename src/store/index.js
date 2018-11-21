import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { createLogger, } from 'redux-logger';
import { appReducer } from '../reducers';

const reducer = combineReducers({
    app: appReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(createLogger()),
);

export default store;