import React, { Component } from 'react'
import BlankEmailTemplate from './BlankEmailTemplate'
import EmailTemplate from './EmailTemplate'

const styles = {

}

class MainPane extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let { isEditing, onClick, tiles, reorderTile } = this.props
    console.log(tiles)
    let content;
    let isEmpty = tiles.length == 0
    if(isEmpty){
      content = <BlankEmailTemplate />
    } else {
      content = (
        <EmailTemplate reorderTile={reorderTile} tiles={tiles} />
      )
    }


    let wrappedOnClick = () => {
      if(isEditing){
        onClick()
      }
    }


    return(
      <div onClick={wrappedOnClick} className="eight columns main-pane">
        { content }
      </div>
    )
  };
}
export default MainPane;
