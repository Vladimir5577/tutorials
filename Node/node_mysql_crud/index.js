var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extend: false  });

var app = express();
var db = mysql.createConnection({
	host: 'localhost',
	user: 'user',
	password: 'password',
	database: 'react',
	multipleStatements : true
});

db.connect((err) => {
	if(!err) {
		console.log('Connection good');
	} else {
		console.log('Connection failted');
	}
});

app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
	res.render('index');
});

app.get('/database', function (req, res, next) {
	db.query('SELECT * FROM workers', function (err, rs) {
		res.render('database', { workers: rs });
	});
});

app.get('/form', function (req, res, next) {
	res.render('form', { worker: {} });
});

app.post('/form', urlencodedParser, function (req, res, next) {
	console.log(req.body);
	db.query('INSERT INTO workers SET ?', req.body, function (err, rs) {
		res.send('insert succecc');
	});
});

app.get('/delete', function (req, res, next) {
	db.query('DELETE FROM workers WHERE id = ?', req.query.id, function (err, rs) {
		res.redirect('/database');
	});
});

app.get('/edit', function (req,res, next) {
	db.query('SELECT * FROM workers WHERE id = ?', req.query.id, function (err, rs) {
		res.render('form', { worker: rs[0] });
	});
});

// update
app.post('/edit', urlencodedParser, function (req, res, next) {
	console.log(req.body);
	var param = [
		req.body, 		// data for update
		req.body.id	// id
	];
	db.query('UPDATE workers SET ? WHERE id = ?', param, function (err, rs) {
		res.redirect('/database');
	});
});

app.listen(3000);