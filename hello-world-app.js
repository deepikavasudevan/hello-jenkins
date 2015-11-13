var express = require('express');

var app = express();

app.get('/', function(request, response) {
   response.send('You are at the home page');
});

app.get('/hello', function(request, response) {
    response.send('Hello world');
});

app.listen(process.env.PORT || 5050);

module.exports = app;
