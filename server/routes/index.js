exports.index = function(req, res, next){
	console.log("INDEX.JS----------------",req.url);
	console.log("INDEX.JS session ----------------",req.session);
//  res.redirect('index.html');
//	res.sendFile('../app/index.html', { root: __dirname + '/..' });
	  
  next();
};


exports.state = function(req, res, next){
//	console.log("ROUTES STATE----------------",req);
	console.log("ROUTES STATE ----------------",req.session);
//  res.sendfile('../app/index.html');
	next();
};

