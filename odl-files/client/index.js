import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from "react-router-dom";

import App from '../shared/App';

ReactDOM.hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);