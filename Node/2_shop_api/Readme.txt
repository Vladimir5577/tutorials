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

Type
=============

Post - create type
	/api/type
	{
		"name": "Computer"
	}

GET - get all types
	/api/type


Brand
===========

Post - create brand (raw)
	/api/brand
	{
		"name": "Samsung"
	}

GET - get all brands
	/api/brand


Device
===========

Post - create brand (form-data)
	/api/device
	name  ----  12 pro
	price ----  12300
	brandId --- 2
	typeId  --- 2
	img     --- need image



GET - get all brands
	/api/device 
		get params: brandId, typeId, limit, page

User registration
=====================
post (row json)
	/api/user/registration

	{
		"email": "bob@bob.com",
		"password": "123"
	}
