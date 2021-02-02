Init project

	$ npm init -y

Create a folder for future database (database for example) and a file inside

Install json-server

	$ npm i json-server

Add in 'package.json':

	"scripts": {
		...
		"start": "json-server --watch database/db.json --port 3001"
		...
	}

In db.json file create simple strucrute like this

	{
		"users": [
			{	
				"id": 1
				"name": "Bob"
			}
		]
	}

	then it will be 'users' resource (we can see it when run terminal)

To run server 

	$ npm start

To see the data in the terminal 
	
	localhost:3001		  ---  to see server in the browser
	localhost:3001/users  ---  to see completely data
	localhost:3001/user/1 ---  to see user with id = 1



07:30 min