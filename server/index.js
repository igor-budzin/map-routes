import express from 'express'; 
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
const bodyParser = require('body-parser');
const mysql = require('mysql');

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

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'map-routes'
});

// app.get("/test", function(req, res) {
// 	// res.status(200).send("Welcome to our restful API");
// 	connection.query('SELECT * FROM routes', (error, results, fields) => {
// 		// console.log(results)
// 		res.send('222222222222');
// 	});
// });

app.post('/save-route', (req, res) => {
	const name = req.body.routeName;
	const points = req.body.routeItems;
	const distance = req.body.distance;
	const routeVisibleType = req.body.routeVisibleType;
	const createDate = new Date().toString();

	const query = `INSERT INTO routes 
		(name, points, distance, routeVisibleType, createDate) VALUES 
		('${name}', '${points}', '${distance}', '${routeVisibleType}', '${createDate}')`

	connection.connect();
	connection.query(query, (error, results, fields) => {
		if (error) throw error;
		res.send('ok');
		connection.end();
	});
});


 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });


app.listen(port, () => {
	console.log(`Server is up and running, localhost:${port}`);
});