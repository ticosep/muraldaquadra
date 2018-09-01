import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Text';
import registerServiceWorker from './registerServiceWorker';
import PrincipalTb from './Table';

ReactDOM.render(<Text />, document.getElementById('logo'));
ReactDOM.render(<PrincipalTb />, document.getElementById('table'));
registerServiceWorker();
