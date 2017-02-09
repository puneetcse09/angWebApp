/*********************
 * Module dependencies
 *********************/

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path');

//var index = require('./routes');
//var app = module.exports = express();
var app = express();
//Express Configuration
require('./config/express')(app);

/***************
 * Configuration
 ***************/

// all environments
app.set('port', process.env.PORT || 9000);

// development only
if (app.get('env') === 'development') {
	console.log("------------------------dev mode ----------------------------");
}

/********
 * Routes
 ********/
app.use('/src/*', routes.state);
//app.get('/src/*', routes.index);

// serve index and view partials
app.get('/', routes.index);
/*var rootPath = path.normalize(__dirname + '/..');
app.get('/', function(req, res){
    res.sendFile(rootPath + '/app/index.html');
});
*/
// redirect all others to the index (HTML5 history)
app.get('/API/*', routes.state);

/***********************
 * SRC Modules 
 ***********************/
require('./src/login/loginServer.js')(app);
require('./src/home/homeServer.js')(app);

/**************
 * Start Server
 **************/
var port = 9000;
var server = app.listen(port);
console.log('Express server listening on port %d in %s mode', port, app.get('env'));

process.on('uncaughtException', function(err) {
	console.error('uncaughtException:', err.message);
	console.error(err.stack, err);
	process.exit(1)
})