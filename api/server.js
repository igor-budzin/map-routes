const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync('api/key.pem', 'utf8');
const certificate = fs.readFileSync('api/cert.pem', 'utf8');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const credentials = {key: privateKey, cert: certificate, passphrase: 'local'};

const FacebookStrategy = require('passport-facebook');

const googleAuth = require('./auth/google-strategy');
const routes = require('./routes');

// Middlewares
// googleAuth(passport);
app.use(passport.initialize());
app.use(cookieSession({
	name: 'session',
	keys: ['123']
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
const router = express.Router();

app.use('/api', router);

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

passport.use('facebook', new FacebookStrategy({
	clientID        : '2056020937782537',
	clientSecret    : '120aae79fed681f17322cc7359c60c12',
	callbackURL     : 'https://localhost:8080/api/login/facebook/callback'
},
 
	// facebook will send back the tokens and profile
	function(access_token, refresh_token, profile, done) {
	// asynchronous
		process.nextTick(function() {
			console.log('ok')
		});
		done();
}));

router.get('/login/facebook', 
  passport.authenticate('facebook', { scope : 'email' }
));
 
 // https://localhost:8080/api/login/facebook/callback
// handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/create',
    failureRedirect : '/'
  })
);



routes(app, router, passport);

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port);
console.log('Magic happens on port ' + port);
