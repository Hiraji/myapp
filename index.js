var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World I am hiraji suryawanshi!');
});


var server = app.listen(process.env.PORT || 5000,function(){


   console.log("Listening to port %s",server.address().port);
});
