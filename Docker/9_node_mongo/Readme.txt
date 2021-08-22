Init a project:

	$ npm init -y

Install express:

	$ npm install express

Install dependencies:

	$ npm install nodemon
	$ npm install mongoose
	$ npm install bcryptjs

// ==================================


In package.json add:

	"scripts": {
		...
		"start": "nodemon index.js"
	},

Create index.js file.

To run:

	$ npm start

In browser type:

	localhost:3000

// =============================================

Docker
-----------

Build:
	
	$ docker build -t node_app .

For Dockerfile
----------------

Run:
	
	$ docker run -v external_path:internal_path -p 3000:3000 --name <container_naem> <image_name that we build>

	$ docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 --name node_app node_app

		-v  --- to map the volume folder
		-v $(pwd):/app:ro    --- read only
		-v /app/node_modules   --- if delete node modules locally 
									it won't be affected in the container
									(not necessary)
		--evn PORT=4000  --- add env valiable port
		--env-file ./.env


Enter to the container:

	$ docker exec -it node_app bash
	or
	$ docker exec -it node_app sh

Remove:

	$ docker rm node_app -f


For docker-compose.yml  ---- better
---------------------------------

Build:
	
	$ docker-compose build  --- only for the first time, or after changes

Run:

	$ docker-compose up 
		-d  --- for detach mode

See running container:

	$ docker ps

To see images:

	$ docker image ls

Stop the container:

	$ docker-compose down

Inspect image:

	$ docker inspect <container_id>

// -----

Go to mongo container:

	$ docker exec -it <container_id> bash
	then go to the mongo databasse:
	# mongo -u user - p password

	or get directly to the container

	$ docker exec -it <container_id> mongo -u user -p password


// ========================================

Postman.
-----------

Create:

	http://localhost:3000/api/v1/posts/  --- POST, body, json
		{
		    "title": "My First Post",
		    "body": "Hello World"
		}

Get:
	http://localhost:3000/api/v1/posts/ 

Register user:
--------------

	http://localhost:3000/api/v1/users/signup  --- POST, body, raw, json

	{
	    "username": "Bob",
	    "password": "123"
	}

Login user:
-------------

	http://localhost:3000/api/v1/users/login  --- POST, body, raw, json

	{
	    "username": "Bob",
	    "password": "123"
	}


// ========================================

Mongo.
-----------

mongo --- start mongodb

show dbs; --- show databases 

use myCustomers; --- create and switch to this database

db --- check current database

Create record:

db.createUser({
	user: "Bob",
	pwd: "1234",
	roles: ["readWrite", "dbAdmin"]
});


use myCustomers; --- create and switch to this database 

db.createCollection('customers'); --- create collection (table for mysql)

show collections; ---  to show collections

db.customers.insert({first_name: "Bob", last_name: "Cumer"});  --- insert record to the collection

db.customers.find(); --- find all record from the collection

db.customers.find().pretty();  ---  to show in readable format

db.costomers.count();	---   count records

// =========================================================



03.07