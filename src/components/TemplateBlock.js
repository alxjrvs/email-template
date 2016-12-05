import React, { Component } from 'react'
import { DropTarget, DragSource} from 'react-dnd';
import { findDOMNode } from 'react-dom';
import { TEMPLATE } from '../constants/template'

const spawnTile = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    if (dragIndex == undefined){
      return;
    }
    props.reorderTile(props.data, dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },

  drop(props) {

  }
};

const blockDrag = {
  beginDrag(props) {
    return {
      index: props.index
    };
  },

  endDrag(props) {

  }
};

let dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

let dragCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class TemplateBlock extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { data, isDragging, connectDragSource, connectDropTarget } = this.props
    let content;
    if(data.type == "Text"){
      content = data.content
    } else {
      content = data.type
    }

    return connectDragSource(
      connectDropTarget(
        <div
          dangerouslySetInnerHTML={{__html: content}}
          className="template-block">
        </div>
      )
    )
  };
}

export default DropTarget(TEMPLATE, spawnTile, dropCollect)(DragSource(TEMPLATE, blockDrag, dragCollect)(TemplateBlock))
