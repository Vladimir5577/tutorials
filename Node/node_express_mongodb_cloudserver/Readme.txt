To install project (node module) type 
	
	$ npm i

================================================

Create project folder and in the folder type

	$ npm init -y

	$ npm install express mongoose

	$ npm i -D nodemon

	$ npm i express-handlebars

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

	localhost:3000