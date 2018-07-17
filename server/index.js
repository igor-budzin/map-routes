import express from 'express'; 
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = process.env.PORT || 4000;
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/test", function(req, res) {
	// res.status(200).send("Welcome to our restful API");
	connection.query('SELECT * FROM routes', (error, results, fields) => {
		// console.log(results)
		res.send('222222222222');
	});
});

app.get('/save-route', (req, res) => {
	console.log(req.body)
	res.send(req);
});

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'map-routes'
// });
 
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