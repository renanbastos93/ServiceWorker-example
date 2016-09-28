var express 		= require('express'),
app 			= express();

app.use(function(req, res, next){
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

app.listen(159, function(){
	console.log("start Server 159");
});