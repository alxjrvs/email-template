import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/configureStore';

const app = document.getElementById('appAnchor')
const store = configureStore();

let render = element => {
  ReactDOM.render(
    <Root class="fullheight" store={store}/>,
    element
  );
};

render(app);
