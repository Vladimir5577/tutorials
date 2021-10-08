Init project:
	
	$ npm init -y

Install dependencies:

	$ npm install express  

	// for database
	$ npm install pg pg-hstore  // for postgres
	or
	$ npm install mysql2  		// for mysql

	$ npm install sequelize cors dotenv
	$ npm install -D nodemon
	$ npm install express-fileupload
	$ npm i uuid
	$ npm i jsonwebtoken bcrypt

In package.json to scripts add
	
	"scripts": {
		"dev": "nodemon index.js"
	}

// ==================================================

Run:

	$ npm run dev

// ==================================================

Postman
=================================

----------------------
User routes:
----------------------

1. Register:
	post /user/register
	raw json
	{
	    "email": "bob@bob.com",
	    "password": "123"
	}

2. Login:
	post /user/register
	raw json
	{
	    "email": "bob@bob.com",
	    "password": "123"
	}

3. Get users:
	get /user/get_users

4. Personal info:
	get /user/user_info
	
	
-------------------------
Article routes:
-------------------------

1. Get all articles:
	get /atricle/get_articles

2. Get article by id:
	get /article/article/123


3. Crete article:
	post /article/create

	{
		"title": "New Post",
		"description": "Good description"
	}	

4. Update article:
	patch /article/update/123

	{
		"title": "New Post",
		"description": "New description"
	}

5. Delete article:
	delete /aricle/delete/123


-------------------------
Comment routes:
-------------------------

1. Create comment:
	post /comment/create
	{
	    "comment": "A good article",
	    "articleId": 2
	}

2. Update comment:
	patch /comment/update/123
	{
	    "comment": "New comment"
	}

3. Delete comment:
	delete /comment/delete/2




Rsycn
-----------
	1. Copy from server

		$ rsync -azP dev@12.123.123.11:~/Node/shop_api/ .

	2. Copy to server:

		$ rsync -azP . dev@12.123.123.11:~/Node/shop_api
