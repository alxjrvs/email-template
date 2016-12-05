import { combineReducers } from 'redux';
import template from '../reducers/templateReducer';
import toolbox from '../reducers/toolboxReducer';

let rootReducer = combineReducers({
  template,
  toolbox
});

export default rootReducer;
