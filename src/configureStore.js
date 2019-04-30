import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootStore from './reducers';
export default function configureStore(initialState) {
    return createStore(
        rootStore,
        initialState,
        applyMiddleware(thunkMiddleware),
    );
}

