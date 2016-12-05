import React, { Component } from 'react'
import { connect } from 'react-redux'
import DraggableBlockSpawner from '../components/DraggableBlockSpawner'
import { dropNewTile } from '../actions/dropped'

class DraggableBlockSpawnerContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { onDrop, type} = this.props

    return(
      <DraggableBlockSpawner onDrop={onDrop} type={type} />
    )
  };
}

let mapStateToProps = state => {
  return {
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onDrop: (type) => dispatch(dropNewTile(type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableBlockSpawnerContainer);
