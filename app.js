var app = require('express')();
var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data
var MongoClient = require('mongodb').MongoClient;
require( './db' ); //呼叫db.js
var mongoose = require( 'mongoose' );
var Todo = mongoose.model( 'Todo' );

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var url = 'mongodb://localhost:27017/data';


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("runoob");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) return console.log(err)
    db = client.db('runoob'); // whatever your database 

    

    app.get('/test', function (req, res) {
        db.collection('site').find().toArray(function(err, results) {
            res.json(results);
        })
    });

    app.post('/adds',function(req, res, next) {
        db.collection('site').insert(req.body, function (err, result) {
            if (err)
               res.json('Post Error');
            else
              res.json('Post Success');
              // 將訊息回傳Angulous
        })
    });

    app.post('/del',function(req, res, next) {
        db.collection('site').remove({ id : req.body.id }, function (err, result) {
            if (err)
               res.json('Post Error');
            else
              res.json('Post Success');
        })
    });

    app.post('/chk',function(req, res, next) {
        db.collection('site').update( {id : req.body.id},{ $set:{ done:req.body.done } }, function (err, result) {
            if (err)
               res.json('Post Error');
            else
              res.json('Post Success');
        })
    });


    app.listen(4200, function () {
    console.log('Work');
    });
    
    
   });




