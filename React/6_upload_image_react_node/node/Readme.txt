Create package.json file

	$ npm init -y
	$ npm i express express-fileupload
	$ npm i -D nodemon concurrently  --- to run node with react --- (not working)

Add to package.json 

	"scripts": {
	    "start": "node index.js",
	    "server": "nodemon index.js",
	    "client": "npm start --prefix client",
	    "dev": "concurrently \"npm run server\" \"npm run client"
	  },

Create index.js

Run app

	$ npm run server
