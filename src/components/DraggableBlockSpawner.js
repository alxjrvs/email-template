import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { TEMPLATE } from '../constants/template'

const dragSource = {
  beginDrag(props) {
    return {
      key: "test"
    };
  },

  endDrag(props) {
    props.onDrop(props.type)
  }
};

let collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DraggableBlockSpawner extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { type, isDragging, connectDragSource, text } = this.props;

    return connectDragSource(
      <div className="draggable-block-spawner one-half column">
        <p className="true-center"> { type } </p>
      </div>
    )
  };
}

export default DragSource(TEMPLATE, dragSource, collect)(DraggableBlockSpawner);
