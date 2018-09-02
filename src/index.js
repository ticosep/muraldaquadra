import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Logo';
import registerServiceWorker from './registerServiceWorker';
import PrincipalTb from './Table';
import NewGame from './NewGame';

ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<PrincipalTb />, document.getElementById('table'));
ReactDOM.render(<NewGame />, document.getElementById('ng'));
registerServiceWorker();
