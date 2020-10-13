Inside project folder type command 

	$ npm init -y

	$ npm i express mysql

	$ npm i -D nodemon
	
Add in package.json line:  "dev": "npx nodemon server/server.js -w server"

{
	...
	"scripts": {
		...
		"dev": "npx nodemon server/server.js -w server"
	}
}



To run app 

	$ npm run dev


In the browser type url

	localhost:3000/workers_api


Define db credential in the file

	/server/db/index.js
