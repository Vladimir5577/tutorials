In empty folder init project:

	$ npm init -y
	$ yarn add -D typescript
	$ npx tsc --init   			--- init typescript config
	$ yarn add -D ts-node
	$ yarn add -D ts-node-dev
	$ yarn add nodemon
	$ yarn add express
	$ yarn add -D @types/express	---  to see information on hover in the text editor 
	$ yarn add -D @types/node 		---  to see information on hover in the text editor

Create src/index.ts

Insidee tsconfig.json change
		"target": "es5",  =>  "target": "es6", 

In package.json

	"script": {
		"start": "ts-node-dev --respawn src/index.ts",
		"dev": "nodemon --exec ts-node src/index.ts",
		"build": "tsc"
	}


	$ yarn build		  ---  will create index.js from index.ts
	$ yarn dev 		   	  ---  development
	$ node src/index.js   ---  will run builded version

