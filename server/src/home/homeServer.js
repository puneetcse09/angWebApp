//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var userData= require('../../mock/usersData.json');

module.exports = function(app) {

	app.get('/API/home/initialize', function(req, res) {
		
//		console.log("SESSION  -------- \n",req.session,"\n sessionID : ",req.sessionID);
        var STATUS = 'ERROR';
//    	console.log("@@@@@ ::::: homeServer : /initialize : ENTER.");
    	
    	res.send(userData);
		
	});

}