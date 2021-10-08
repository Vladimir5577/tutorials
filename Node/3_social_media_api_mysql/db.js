// db connection
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
	'node_shop_test',
	'root',
	'password',
	{
		dialect: 'mysql',
		host: 'localhost',
		port: 3306
	}
);