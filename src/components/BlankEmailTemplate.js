import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import { TEMPLATE } from '../constants/template'

const spawnTile = {
  drop(props) {
    console.log("dropped!");
  }
};

let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BlankEmailTemplate extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div className="template-workspace">
        <h1 className="true-center">
          Get started by dragging a template block over here!
        </h1>
      </div>
    )
  };
}
export default DropTarget(TEMPLATE, spawnTile, collect)(BlankEmailTemplate);
