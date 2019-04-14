import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import App from './App';
import * as serviceWorker from './serviceWorker';


// React.dom  says App.js should be rendered to document.getelementbyID 'root'
//Name of component, div you want inserted in to!!! useful!
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
