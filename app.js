var app = require('express')();
var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


 data = [
  {id: 1,value: 'Todo Item No.1',done: false}, 
  {id: 2,value: 'Todo Item No.2',done: false}, 
  {id: 3,value: 'Todo Item No.3',done: false},
  {id: 4,value: 'Todo Item No.4',done: false},
  {id: 5,value: 'Todo Item No.5',done: false},
  {id: 6,value: 'Todo Item No.6',done: false},
  {id: 7,value: 'Todo Item No.7',done: false},
  {id: 8,value: 'Todo Item No.8',done: false},
];

// app.get('/', function (req, res) {
//   console.log('/////');
//   res.send('test');
// });
 app.get('/test', function (req, res) {
   //console.log('test')
   res.json(data);
 });

app.post('/adds',function(req, res, next) {
   data.push({
     id: req.body.id,
     value: req.body.value,
     done: req.body.done      
     })
     console.log(req.body);
});

app.listen(3000, function () {
  console.log('Work');
});
