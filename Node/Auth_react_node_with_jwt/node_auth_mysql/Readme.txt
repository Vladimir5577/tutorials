Inside project folder type command 

	$ npm init -y

	$ npm i express mysql

	$ npm i -D nodemon

	$ npm install cors

	$ npm install bcrypt

	$ npm install express-session body-parser cookie-parser

	$ yarn add jsonwebtoken
	
In package.json file in 'scripts' add
	
	...
	"scripts": {
		...
		"start": "node index",
  		"dev": "nodemon index"
	},
	...

Create file index.js.

To run app 

	$ npm run dev

In the browser type

	localhost:3001


==================================================

Create table:

	CREATE TABLE users (
		id INT PRIMARY KEY AUTO_INCREMENT,
		username VARCHAR(255) NOT NULL,
		password VARCHAR(255)
	);