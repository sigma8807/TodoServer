var express = require('express');
var app = express();

const data = [
  {id: 1,value: 'Todo Item No.1',done: false}, 
  {id: 2,value: 'Todo Item No.2',done: false}, 
  {id: 3,value: 'Todo Item No.3',done: false}
];

// app.get('/', function (req, res) {
//   console.log('/////');
//   res.send('test');
// });
app.get('/test', function (req, res) {{}
  //console.log('test')
  res.json(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
