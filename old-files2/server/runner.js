/*
    eslint
        import/no-commonjs: 0
*/

require('babel-register')({
	ignore: /node_modules\/(?!antd)/
});
require('babel-polyfill');
require('./app.js');