import { EDIT, EXIT_EDIT, UPDATE } from '../actions/editing'

let initialState = {
  currentEdit: undefined,
  data: undefined
}

const toolbox = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE:
      let newData = Object.assign({}, state.data, {
        content: action.content
      });
      return Object.assign({}, state, {
        data: newData
      });
    case EDIT:
      return Object.assign({}, state, {
        currentEdit: action.data.key,
        data: action.data
      });
    case EXIT_EDIT:
      return initialState;
    default:
      return state;
  }
}

export default toolbox;
