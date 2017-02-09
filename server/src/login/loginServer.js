//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var userData= require('../../mock/usersData.json');

module.exports = function(app) {

//	console.log("@@@@@ ::::: loginCtrl : userData : ENTER.",userData.data[0]);
	
	app.post('/API/login/loginSubmit', function(req, res) {
		
		var userName=req.body.username;
        var password=req.body.password;
        var STATUS = 'ERROR';
    	console.log("@@@@@ ::::: loginCtrl : /loginSubmit : ENTER.");
    	console.log("@@@@@ ::::: userNme : \n ",userName," \n password : ",password);
    	
    	if(userName && password){
    		userData.data.forEach(function(value){
    			if(userName===value.userName && password===value.password){
//    				console.log("---------------",value.userName);
      				req.session.authenticated = true;
      				req.session.user=value;
      				STATUS = 'SUCCESS';
      				}
    			});
    		}    	
    	console.log("SESSION  -------- \n",req.session,"\n sessionID : ",req.sessionID);
    	
    	res.send(STATUS);
		
	});

	app.get("/logout", function(req, res) {
		req.session.destroy();
		res.render("login", {
			errorMsg : null,
			login : 'user'
		});
	});
}