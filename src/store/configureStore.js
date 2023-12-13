import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import allUsersReducer from './reducers/users-reducers';


export default function configureStore() {
    const rootReducer = combineReducers({
        users: allUsersReducer 
    });

    const logger = state => {
        return next => {
            return action => {
                console.log("[ACTION IN MIDDLEWARE]", action);
                next(action);
            }
        }
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

    return store;
}