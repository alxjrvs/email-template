import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPane from '../components/MainPane'
import { dropTile } from '../actions/dropped'
import { exitEditMode } from '../actions/editing'

class MainPaneContainer extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
  }

  render() {
    const { isEditing, onClick, reorderTile, tiles } = this.props
    return(
      <MainPane isEditing={isEditing} onClick={onClick} tiles={tiles} reorderTile={reorderTile}/>
    )
  };
}


let mapStateToProps = state => {
  return {
    tiles: state.template.tiles,
    isEditing: state.template.isEditing
  }
}

let mapDispatchToProps = dispatch => {
  return {
    reorderTile: (type, dragIndex, hoverIndex) => dispatch(dropTile(type, dragIndex, hoverIndex)),
    onClick: () => dispatch(exitEditMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPaneContainer);
