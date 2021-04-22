Initialize project:

	$ npm init -y

Install dependancies:

	$ npm i express cors ws nodemon

In package.json add:

	"scripts": {
		..........
		"start": "nodemon longpulling.js"
		or
		"start": "nodemon eventsource.js"
		or
		"start": "nodemon websocket.js"
	}

To run:

	$ npm start