import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import routes from './router';
import './index.css';

const rootEl = document.getElementById('root');
class Root extends Component {
  render() {
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

ReactDOM.render(<Root />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
