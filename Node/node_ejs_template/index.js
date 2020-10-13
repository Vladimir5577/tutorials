var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extend: false  });

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.post('/about', urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('about_success', { data: req.body });
});

app.get('/news/:id', function (req, res) {
	var myObject = { title: 'Good title', id: 4, myArray: ['Node js', 'laravel', 'PHP', 'JavaScript', 'React js'] };
	res.render('news', { newsId: req.params.id, newParam: 234, obj: myObject });
});

app.listen(3000);