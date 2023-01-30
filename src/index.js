import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';
import {StrictMode} from 'react';

const myelement1 = (<ProductProvider>
    <Router>
        <App />
    </Router>
</ProductProvider>);
const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

ReactDOM.render(
    myelement1,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//Test
serviceWorker.unregister();
