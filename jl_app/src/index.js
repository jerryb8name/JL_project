import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Index from "./pages";

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
