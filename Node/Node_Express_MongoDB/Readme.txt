To download node module project type:

	$ npm i
==========================================================================
Create project from scrach
==========================================================================

Inside new project folder 

	$ npm init -y

	$ npm install --save express express-handlebars mongoose body-parser nodemon

In file package.json add inside "scripts":

	"scripts": {
		...
		"start": "nodemon index.js"
	},

Create a file in the profuct folder

	index.js

To run app type in the terminal

	$ npm start

In the browser type

	localhost:3000





========================================================================
Mongodb cheatshet:
========================================================================

mongose - start mongodb in the terminal
show dbs; - show databases
use workers; - use database 'workers'
show collections; - show collections (tables)
db.users.find(); - show data from users collection (table)




