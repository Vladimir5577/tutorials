To install:

	$ npm init -y
	$ npm install --save express

In package.json type

	"scripts": {
		....
		"start": "nodemon app.js"
		....
	}

Create app.js.

To tun:

	$ npm run start

============================================================
	Let's docerise it
=============================================================


Create file: Dockerfile

In the terminal

 Build docker image		

	$ docker build -t node-docker-tutorial .

Start container from this docker image

	$ docker run -it -p 9000:3000 node-docker-tutorial

In browser 

	localhost:9000

To run app on the background (detach mode)

	$ docker run -d -p 9000:3000 node-docker-tutorial

To see what going on 

	$ docker ps

===========

Install nodemon

	$ npm install --save nodemon

Rebuild our docker image

	$ docker build -t node-docker-tutorial .

Run docker 

	$ docker run -it -p 9001:3000 -v $(pwd):/app node-docker-tutorial

In browser

	localhost:9001


-it  ---  interactive mode (to see changes)
-d   ---  detach mode (as a background)
