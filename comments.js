// Create web server 
// Start server: node comments.js
// Send request: curl -X POST -d "comment=Hello" http://localhost:3000/comments
// Stop server: Ctrl+C

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body.comment);
  res.end();
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');