import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import path from 'path'; 
import fs from 'fs'; 

import webpackAssets from '../etc/webpack-assets.json';
import App from '../shared/App';


module.exports = (app, connection, passport) => {
	app.get('/logout', (req, res) => {
		req.logout(); 
		req.session = null;
		res.redirect('/');
	});

	// app.get('/auth/google/login', passport.authenticate('google', {
	// 	scope: ['https://www.googleapis.com/auth/userinfo.profile']
	// }));

	// app.get('/auth/google/callback',
	// 	passport.authenticate('google', { failureRedirect: '/auth/google/callback' }),
	// 	(req, res) => {
	// 		req.session.token = req.user.token;
	// 		// res.send('OK');
	// 		res.redirect('http://localhost:3000/');
	// 	}
	// );

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

	app.get('/*', (req, res) => {
	  const context = {};
	  const clientRouter = () => {
	  	return (
	  		<StaticRouter location={req.url} context={context}>
	  		  <App />
	  		</StaticRouter>
	  	)
	  };
	  const app = ReactDOMServer.renderToString(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

			<title>Map Routes</title>

			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700&amp;subset=cyrillic" rel="stylesheet">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

			<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAI7aTEA9i1tub7dc87buwJqSsM-sLb_ns&libraries=places"></script>
		</head>
		<body>
			<div id="root"></div>
			<script type="application/javascript" src="${webpackAssets.main.js}"></script>
		</body>
		</html>
	  `);
	  res.setHeader('Content-Type', 'text/html');
	  res.end(app);
	  // const indexFile = path.resolve(__dirname, '../shared/assets/index.html');
	  // fs.readFile(indexFile, 'utf8', (err, data) => {
	  //   if (err) {
	  //     console.error('Something went wrong:', err);
	  //     console.error(indexFile)
	  //     return res.status(500).send('Oops, better luck next time!');
	  //   }

	  //   return res.send(
	  //     data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
	  //   );
	  // });
	});
}