const dbConnection = require('./dbConnection');

module.exports = (app, router, passport) => {

	router.route('/save-route').post((req, res) => {
		const name = req.body.routeName;
		const points = req.body.routeItems;
		const distance = req.body.distance;
		const routeVisibleType = req.body.routeVisibleType;
		const createDate = new Date().toString();

		const query = `INSERT INTO routes 
			(name, points, distance, routeVisibleType, createDate) VALUES 
			('${name}', '${points}', '${distance}', '${routeVisibleType}', '${createDate}')`;

		try {
			setTimeout(() => {
				const connection = dbConnection()();
				connection.query(query, (error, results, fields) => {
					if (error) throw error;
					res.send('OK');
					connection.destroy();
				});
			}, 1500);
		}
		catch (error) {
			res.send('ERROR');
		}
	});

	router.route('/get-routes').get((req, res) => {
		const connection = dbConnection()();
		const query = `SELECT * FROM routes`;

		connection.query(query, (error, results, fields) => {
			if (error) throw error;
			res.json(results);
			connection.destroy();
		});
	});

	// router.route('/logout').get((req, res) => {
	// 	req.logout(); 
	// 	req.session = null;
	// 	res.redirect('/');
	// });

	// router.route('/auth/google/login').get((req, res) => {
	// 	passport.authenticate('google', {
	// 		scope: ['https://www.googleapis.com/auth/userinfo.profile']
	// 	})
	// });

	// router.route('/auth/google/callback').get(
	// 	passport.authenticate('google', { failureRedirect: '/auth/google/callback' }),
	// 	(req, res) => {
	// 		req.session.token = req.user.token;
	// 		// res.send('OK');
	// 		res.redirect('/create');
	// 	}
	// );
}


