const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: 'password',
	user: 'user',
	database: 'react',
	host: 'localhost',
	port: '3306'
});

let userDb = {};

userDb.all = () => {
	return new Promise((resolve, reject) => {
		pool.query(`SELECT * FROM workers`, (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
};

userDb.one = (id) => {
	return new Promise((resolve, reject) => {
		pool.query(`SELECT * FROM workers WHERE id = ?`, [id], (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results[0]);
		});
	});
};

module.exports = userDb;