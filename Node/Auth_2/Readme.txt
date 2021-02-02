Install:

	$ npm init -y
	$ npm install express
	$ npm install --save-dev nodemon
	$ npm install mongoose
	$ npm install dotenv
	$ npm install @hapi/joi
	$ npm install bcryptjs
	$ npm install jsonwebtoken

Create index.js

In package.json in "scripts" add

	"scripts": {
		"start": "nodemon index.js"
	}    

Start app:

	$ npm start

In Postman 
	
	- For register:
	http://localhost:3000/api/user/register

	- For login 
	http://localhost:3000/api/user/login