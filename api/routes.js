
module.exports = (app, router, connection) => {
	router.route('/save-route').post((req, res) => {
		const name = req.body.routeName;
		const points = req.body.routeItems;
		const distance = req.body.distance;
		const routeVisibleType = req.body.routeVisibleType;
		const createDate = new Date().toString();

		const query = `INSERT INTO routes 
			(name, points, distance, routeVisibleType, createDate) VALUES 
			('${name}', '${points}', '${distance}', '${routeVisibleType}', '${createDate}')`;

		connection.connect();
		try {
			setTimeout(() => {
				connection.query(query, (error, results, fields) => {
					res.send('OK');
				});
			}, 1500);
		}
		catch (error) {
			res.send('ERROR');
		}
		connection.end();
	}); 

	router.route('/get-routes').get((req, res) => {

		const query = `SELECT * FROM routes`;

		// connection.connect();
		connection.query(query, (error, results, fields) => {
			if (error) throw error;
			// connection.end();
			res.json(results);
		});
	});

	router.route('/test').get((req, res) => {
		res.send('ok test');
	});
}


