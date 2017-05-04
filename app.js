var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// USE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
	console.log(req.body);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});