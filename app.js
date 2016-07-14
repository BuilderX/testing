var express = require('express'),
    app = express(),
    db = require('./db');

app.get('/save',function(req,res){
    var post  = {from:'mi',to:'tu',msg:'hola'};
    var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
    if (err) throw err;
    });
});

server.listen(3000);
