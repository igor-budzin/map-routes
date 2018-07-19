module.exports = (app, connection, passport) => {

	// app.get('/*/', (req, res) => {
	// 	res.redirect('http://localhost:4000/');
	// });

	app.get('/logout', (req, res) => {
		req.logout();
		req.session = null;
		res.redirect('/');
	});

	app.get('/auth/google/login', passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/userinfo.profile']
	}));

	app.get('/auth/google/callback',
		passport.authenticate('google', { failureRedirect: '/auth/google/callback' }),
		(req, res) => {
			req.session.token = req.user.token;
			// res.send('OK');
			res.redirect('http://localhost:4000/');
		}
	);

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
}