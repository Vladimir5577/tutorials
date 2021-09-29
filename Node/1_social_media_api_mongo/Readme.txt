Install project:

	$ cp .env.dist .env
	then put credentials in .env

	$ npm install 
	or
	$ yarn install

Init project:

	$ npm init -y

Install packages:

	$ yarn add express mongoose dotenv helmet morgan nodemon
	$ yarn add bcrypt

In package.json:

	"scripts": {
	    "dev": "nodemon index.js",
	    "prod": "node index.js"
	 },

Run project:

	$ yarn dev  --- development mode 
	$ yarn prod --- production


// ============================================

Register user:
-------------------
Post
	http://localhost:8800/api/auth/register
	raw json:
	{
		"username": "Bob",
		"email": "bob@bob.com",
		"password": "123" 
	}


Login:
-------------------
Post:
	http://localhost:8800/api/auth/login
	raw json
	{
		"email": "bob@bob.com",
		"password": "123" 
	}

Update user
-------------------
Put:
	http://localhost:8800/api/users/61488967676cb6139a99008a
	raw json
	{
		"city": "Moscow",
		"desc": "Updated description",
		"userId": "61488967676cb6139a99008a"
	}

Delete user
-------------------
Delete:
	http://localhost:8800/api/users/61489687c49ce5e8132fdf44
	raw json
	{
		"userId": "61489687c49ce5e8132fdf44"
	}

Get user by id	
-------------------
Get:
	http://localhost:8800/api/users/61489687c49ce5e8132fdf44


Follow user
-------------------
Put:
	http://localhost:8800/api/users/61489f149422229787b8dbc7/follow
	raw json
	{
	    "userId": "61489f149422229787b8dbc7"
	}

Unfollow user
-------------------
Put:
	http://localhost:8800/api/users/61489f149422229787b8dbc7/unfollow
	raw json
	{
	    "userId": "61489f149422229787b8dbc7"
	}


=================================================================
Posts
=============

Crete post
-------------------
Post:
	http://localhost:8800/api/posts
	raw json
	{
		"userId": "61489f149422229787b8dbc7",
		"desc": "New post",
		"img": "image.png"
	}


Update
-------------------
Put:
	http://localhost:8800/api/posts/6148b8fe7c26b31ce3ca4b11
	raw json
	{
	    "userId": "61489f149422229787b8dbc7",
	    "desc": "New post 123132",
	    "img": "image.png"
	}


Delete
-------------------
Put:
	http://localhost:8800/api/posts/6148b8fe7c26b31ce3ca4b11
	raw json
	{
	    "userId": "61489f149422229787b8dbc7"
	}


Get all post by user
-------------------
Get:
	http://localhost:8800/api/posts/timeline/all
	{
	    "userId": "61489f149422229787b8dbc7"
	}

-------------------
https://www.youtube.com/watch?v=ldGl6L4Vktk&t=2828s&ab_channel=LamaDev
