import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditButton from '../components/EditButton'
import { editTile, deleteTile } from '../actions/editing'

class EditingLayerContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { editingKey, data, editOnClick, deleteOnClick } = this.props

    return(
      <div className="editing-layer">
        <EditButton data={data} onClick={editOnClick} editingKey={editingKey} type="edit"/>
        <EditButton data={data} onClick={deleteOnClick} editingKey={editingKey} type="delete"/>
      </div>
    )
  };
}

let mapDispatchToProps = dispatch => {
  return {
    editOnClick: (data) => dispatch(editTile(data)),
    deleteOnClick: (key) => dispatch(deleteTile(key))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(EditingLayerContainer);
