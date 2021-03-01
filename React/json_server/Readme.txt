Install after clone ( node_modules folder )

	$ npm i

===================================

To create json server

	$ npm init -y

	$ npm i json-server

In "package.json" add 

	"script": {
		"server": "json-server --watch db.json --port 3001 --middlewares ./range.js ./cors.js"
	}

	===========================
	To run server on the host add host to "package.json" params --host 88.888.888.88  
	"script": {
		"server": "json-server --host 88.888.888.88 --watch db.json --port 3001 --middlewares ./range.js ./cors.js"
	}

	Then run pm2 with command
	$ pm2 start npm --name 'json_server' -- run server
	===========================


Create db.json file with certain colections (posts, users ....) 

In db.json file create simple strucrute like this

	{
		"users": [
			{	
				"id": 1
				"name": "Bob"
			}
		]
	}

Run server

	$ npm run server

Add middleware 
	- cors.js
	- range.js


To see the data in the browser
	
	localhost:3001		  ---  to see server in the browser
	localhost:3001/users  ---  to see completely data
	localhost:3001/user/1 ---  to see user with id = 1
