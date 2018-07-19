const express = require('express');

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const bodyParser = require('body-parser');
const mysql = require('mysql');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const auth = require('./auth/auth');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

(function() {
	// Step 1: Create & configure a webpack compiler
	var webpack = require('webpack');
	var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config');
	var compiler = webpack(webpackConfig);

	// Step 2: Attach the dev middleware to the compiler & the server
	app.use(require("webpack-dev-middleware")(compiler, {
		noInfo: true, publicPath: webpackConfig.output.publicPath
	}));

	// Step 3: Attach the hot middleware to the compiler & the server
	app.use(require("webpack-hot-middleware")(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
	}));
})();


auth(passport);

app.use(passport.initialize());
app.use(cookieSession({
	name: 'session',
	keys: ['123']
}));
app.use(cookieParser());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'map-routes'
});


routes(app, connection, passport);


app.listen(port, () => {
	console.log(`Server is up and running, localhost:${port}`);
});