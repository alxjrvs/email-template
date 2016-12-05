import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toolbox from '../components/Toolbox'

class ToolboxContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { data, editingKey } = this.props
    return(
      <Toolbox data={data} editingKey={editingKey}/>
    )
  };
}

let mapStateToProps = state => {
  return {
    editingKey:  state.toolbox.currentEdit,
    data:  state.toolbox.data
  }
}

let mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolboxContainer);
