// Libraries
import React, {Component, PropTypes} from 'react';
import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';

// Redux
import { Provider } from 'react-redux';

class Html extends Component {
	render () {
		const PROD = process.env.NODE_ENV === 'production';

		const { title, store, assets, url, context } = this.props;

		const { manifest, app, vendor } = assets || {};

		let state = store.getState();

		const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
		const Layout =  PROD ? require( '../../build/prerender.js') : () => {};

		const root = PROD && renderToString(
			<Provider store={store}>
				<StaticRouter location={url} context={context}>
					<Layout />
				</StaticRouter>
			</Provider>
		);

		return (
			<html>
			<head>
				<meta charSet="utf-8"/>
				<title>{title}</title>

				{PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.2/antd.min.css"/>
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700&amp;subset=cyrillic" rel="stylesheet" />
				<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAI7aTEA9i1tub7dc87buwJqSsM-sLb_ns&libraries=places"></script>

			</head>
			<body>
				<script dangerouslySetInnerHTML={{__html: initialState}} />
				{PROD ? <div id="root" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="root"></div>}
				{PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
				{PROD && <script src={vendor.js}/>}
				<script src={PROD ? app.js : '/static/app.js'} />
			</body>
			</html>
		);
	}

}

export default Html;
