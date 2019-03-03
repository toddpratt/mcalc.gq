const express = require('express');
const request = require('request-promise-native');
const app = express();

app.use(express.json());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/index.html');
});

app.use(express.static('/build/'))
app.listen(8080);
