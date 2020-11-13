To inatall node module 

	$ npm i

========================================================================

For creation:

Install 

	$ npm init -y

	$ npm install express multer uuid

	$ npm i -D nodemon

	$ npm i mongoose

In package.json file in 'scripts' add
	
	...
	"scripts": {
		...
		"start": "node server-upload",
  		"dev": "nodemon server-upload"
	},
	...

To run app 

	$ npm run dev

In the browser type: 

	localhost:3000

=========================================================================

In mongo 

	db.images.find({})
