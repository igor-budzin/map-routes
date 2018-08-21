import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Reducers from './reducers/index.js';

export default (history) => {
	const middleware = routerMiddleware(history);

	const store = createStore(combineReducers({
		...Reducers,
		router: routerReducer
	}), composeWithDevTools(applyMiddleware(middleware)));


	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			const nextReducers = require('./reducers/index.js');
			const rootReducer = combineReducers({
				...nextReducers,
				router: routerReducer
			});

			store.replaceReducer(rootReducer);
		});
	}


	return store;
}
