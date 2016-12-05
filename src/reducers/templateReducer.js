import { DROPPED, DROPPED_NEW } from '../actions/dropped'
import { DELETE, EDIT, EXIT_EDIT, UPDATE } from '../actions/editing'
import shortid from 'shortid'

let initialState = {
  tiles: [],
  isEditing: false
}

let wrapPrimitiveInStateObject = (action) => {
  return {
    type: action.tileType,
    content: "",
    index: action.index,
    key: shortid.generate()

  }
}

let reMap = (array) => {
  return array.map((tile) => {
    return tile;
  })
}

let droppedNew = (state, action) => {
  let newState;
  if(state.tiles.length > 0){

    state.tiles.push(wrapPrimitiveInStateObject(action))
    let newTiles = reMap(state.tiles);
    newState = Object.assign({}, state, {
      tiles: newTiles
    });

  } else {
    newState = Object.assign({}, state, {
      tiles: [wrapPrimitiveInStateObject(action)]
    });

  }
  return newState;
}

let dropped = (state, action) => {
  let replaced;
  let oldTiles = state.tiles

  if(action.dragIndex == undefined){
    replaced = wrapPrimitiveInStateObject(action)
  } else {
    replaced = oldTiles[action.dragIndex]
    oldTiles.splice(action.dragIndex, 1)
  };

  oldTiles.splice(action.hoverIndex, 0, replaced)

  return Object.assign({}, state, {
    tiles: reMap(oldTiles)
  });

}

let deleteTile = (state, action) => {
  let oldTiles = state.tiles.filter((tile)=> {
    return tile.key != action.key
  })

  return Object.assign({}, state, {
    tiles: reMap(oldTiles)
  });
}
let updateTile = (state, action) => {
  let oldTiles = state.tiles
  let target = oldTiles.find((tile) => tile.key == action.key )

  target.content = action.content
  return Object.assign({}, state, {
    tiles: reMap(oldTiles)
  });
}

const template = (state = initialState, action) => {
  switch(action.type) {
    case EDIT:
      return Object.assign({}, state, {
        isEditing: true
      });
    case EXIT_EDIT:
      return Object.assign({}, state, {
        isEditing: false
      });
    case UPDATE:
      return updateTile(state, action)
    case DELETE:
      return deleteTile(state, action)
    case DROPPED_NEW:
      return droppedNew(state, action)
    case DROPPED:
      return dropped(state, action)
    default:
      return state;
  }
}

export default template;
