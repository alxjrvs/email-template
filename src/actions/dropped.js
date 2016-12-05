const DROPPED = "DROPPED"
const DROPPED_NEW = "DROPPED-NEW"

let dropNewTile = (tileType) => {
  return {
    type: DROPPED_NEW,
    tileType
  };
}
let dropTile = (tileType, dragIndex, hoverIndex) => {
  return {
    type: DROPPED,
    tileType,
    dragIndex,
    hoverIndex
  };
}

export {
  DROPPED,
  DROPPED_NEW
}

export {
  dropTile,
  dropNewTile
}
