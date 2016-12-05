import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

let configureStore = () => {
  let store = createStore(rootReducer);
    return store
};

export default configureStore;
