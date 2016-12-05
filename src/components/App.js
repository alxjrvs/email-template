import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ToolboxContainer from '../containers/ToolboxContainer'
import MainPaneContainer from '../containers/MainPaneContainer'

class App extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
  }

  render() {
    return(
      <div className="container fullheight">
        <div className="row fullheight">
          <ToolboxContainer />
          <MainPaneContainer />
        </div>
      </div>
    )
  };
}

export default DragDropContext(HTML5Backend)(App);
