const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
	host : "localhost",
	user : "user",
	password : "password",
	database : "react",
	multipleStatements : true
});

mysqlConnection.connect((err) => {
	if(!err) {
		console.log('Connection good');
	} else {
		console.log('Connection failted');
	}
});

module.exports = mysqlConnection;