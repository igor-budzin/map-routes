require('babel-register')({
	ignore: /node_modules\/(?!antd)/
});
require('babel-polyfill');
require('./server.js');