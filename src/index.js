// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from "react";
import ReactDOM from "react-dom";
import "react-virtualized/styles.css"; // only needs to be imported once
import faker from "faker";
import {Demo, GridDemo} from "./Demo";

// Table data as an array of objects


ReactDOM.render(<GridDemo />, document.getElementById("root"));
