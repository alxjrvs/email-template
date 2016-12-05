const EDIT = "EDIT"
const EXIT_EDIT = "EXIT_EDIT"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

let updateTile = (key, content) => {
  return {
    type: UPDATE,
    key,
    content
  };
}
let deleteTile = (key) => {
  return {
    type: DELETE,
    key
  };
}

let editTile = (data) => {
  return {
    type: EDIT,
    data
  };
}

let exitEditMode = () => {
  return {
    type: EXIT_EDIT,
  };
}

export {
  EDIT,
  UPDATE,
  EXIT_EDIT,
  DELETE
}

export {
  exitEditMode,
  deleteTile,
  updateTile,
  editTile
}
