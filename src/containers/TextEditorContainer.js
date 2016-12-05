import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTile } from '../actions/editing'
import RichTextEditor from 'react-rte';


class TextEditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createValueFromString(this.props.content, 'html')
    }

    this.onChange = (value) => {
      let { editOnClick, editingKey} = this.props
      this.setState({value})
      editOnClick(editingKey, value.toString('html'))
    }
  };


  render() {

    return(
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  };
}

let mapDispatchToProps = dispatch => {
  return {
    editOnClick: (key, content) => dispatch(updateTile(key, content)),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(TextEditorContainer);
