import React, { Component } from 'react'

class EditButton extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { onClick, data, editingKey, type } = this.props

    let editOnClick;
    let content;

    if(type == "edit"){
      content = "e"
      editOnClick = () => onClick(data);
    } else {
      content = "d"
      editOnClick = () => onClick(editingKey);
    }


    return(
      <div onClick={editOnClick} className="edit">
        <p> { content } </p>
      </div>
    )
  };
}
export default EditButton;
