const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'map-routes'
});

routes(app, router, connection);

app.listen(port);
console.log('Magic happens on port ' + port);
