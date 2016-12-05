import React, { Component } from 'react'
import DraggableBlockSpawnerContainer from '../containers/DraggableBlockSpawnerContainer'
import TextEditorContainer from '../containers/TextEditorContainer'

class Toolbox extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { data, editingKey } = this.props
    let content;
    let editMode = (typeof editingKey != "undefined")

    if(editMode){
      if(data.type == "Text") {
        content = <TextEditorContainer editingKey={data.key} content={data.content} />
      } else {
        content = (
          <h1 className="true-center"> Edit For NonText </h1>
        )
      }
    } else {
      content = (
        <div className="row">
          <DraggableBlockSpawnerContainer type={"Text"} />
          <DraggableBlockSpawnerContainer type={"Images"} />
          <DraggableBlockSpawnerContainer type={"Divider"} />
        </div>
      )
    }

    return(
      <div className="four columns left-pane">
        { content }
      </div>
    )
  };
}
export default Toolbox;
