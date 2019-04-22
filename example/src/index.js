import React from 'react';
import ReactDOM from 'react-dom';
import ComponentFirst from './components/ComponentFirst';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(  <ComponentFirst/> , document.getElementById('root'));
serviceWorker.unregister();
