import { applyMiddleware, createStore } from 'redux';
import movieReducer from './reducers/movieReducer';
import thunk from 'redux-thunk';

export default createStore(movieReducer, applyMiddleware(thunk));
