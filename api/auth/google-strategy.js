const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
	passport.use(new GoogleStrategy({
			clientID: '947037308898-1ag3gn3ppci5o21oq4sl6pjjtdmb9da8.apps.googleusercontent.com',
			clientSecret: 'WjkVrzIneR4uNKlf1_XBCRVN',
			callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
		},
		(token, refreshToken, profile, done) => {
			console.log('111111132423423534654');
			return done(null, {
				profile: profile,
				token: token
			});
		}
	));
};