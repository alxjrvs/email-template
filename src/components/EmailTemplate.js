import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import { TEMPLATE } from '../constants/template'
import TemplateBlock from './TemplateBlock'
import EditingLayerContainer from '../containers/EditingLayerContainer'

const spawnTile = {
  drop(props) {
    console.log("dropped in email template")
  }
};

let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class EmailTemplate extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { reorderTile, tiles, connectDropTarget, isOver } = this.props;
    let children = tiles.map((tile, index) => {
      return(
        <div className="template-block-container">
          <TemplateBlock  reorderTile={reorderTile} data={tile} index={index} key={tile.key} />
          <EditingLayerContainer data={tile} editingKey={tile.key} key={index} />
        </div>
      )
    })

    return connectDropTarget(
      <ul className="template-workspace">
        { children }
      </ul>
    )
  };
}
export default DropTarget(TEMPLATE, spawnTile, collect)(EmailTemplate);
