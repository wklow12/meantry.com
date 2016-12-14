var express = require('express'); 
var app = express(); 

app.get('/', function(req, res){
    res.sendfile("home.html"); 
}).listen(3000, function(){
    console.log("server run on 3000 port"); 
})



app.get('/onButtonClicked', function(req, res){
    res.send("We have received your message"); 
}); 