const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(cors({
	origin: ['http://localhost:3000'],
	methods: ['GET', 'POST'],
	credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		key: 'userId',
		secret: 'subscribe',
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 60 * 60 * 24,
		}
	})
);

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'password',
	database: 'react_auth'
});

app.get('/', (req, res) => {
	res.send('<h1>Node Auth Home Page</h1>');
});

// register user
app.post('/register', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	bcrypt.hash(password, saltRounds, (err, hash) => {
		if (err) {
			console.log(err);
		}

		db.query(
			"INSERT INTO users (username, password) VALUES (?, ?)", 
			[username, hash],
			(err, result) => console.log(err) 
		);
	});
});

const verifyJWT = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (!token) {
		res.send('Hey we need a token, please give it to us next time!');
	} else {
		jwt.verify(token, 'jwtSecret', (err, decoded) => {
			if (err) {
				res.json({ auth: false, message: 'You failed to authenticate !' });
			} else { 
				req.userId = decoded.id;
				next();
			}
		});
	}
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
	res.send('You are authenticated Congrats!');
});

app.get('/login', (req, res) => {
	if (req.session.user) {
		res.send({ loggedIn: true, user: req.session.user });
 	} else {
 		res.send({ loggedIn: false });
 	}
});

// auth
app.post('/login', (req, res) => {
	// const { username, password } = req.body;
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE username = ?;", 
		username,
		(err, result) => {
			if (err) {
				res.send({ err: err });
			}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response) => {
					if (response) {

						// create token
						const id = result[0].id;
						const token = jwt.sign({id}, 'jwtSecret', {
							expiresIn: 300,
						});
						req.session.user = result;


						// console.log(req.session.user);
						res.json({ auth: true, token: token, result: result });
					} else {
						res.json({ auth: false, message: 'Wrong username / password' });
					}
				});
			} else {
				res.json({ auth: false, message: 'No user exists' });
			}
			
		}
	);
});

app.listen(3001, () => {
	console.log('Server running on the port 3001');
});
