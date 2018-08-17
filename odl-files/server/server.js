const express = require('express');

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const bodyParser = require('body-parser');
const mysql = require('mysql');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
import path from 'path'; 

const auth = require('./auth/auth');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();



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