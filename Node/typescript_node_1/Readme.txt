Install typescript globally 
	
	$ npm i -g typescript

Check version 

	$ tsc --version

Create file app.ts

Compile the code 

	$ tsc app.ts   		---  this will generate app.js file
	$ tsc app.ts -w 	---  constantly watch the file

Delete 'dist' folder

================================

Create config file 


	$ tsc --init

	Insidee tsconfig.json change
		"target": "es5",  =>  "target": "es6", 
	Uncomment lines
		- "outDir": "./dist",   --- where will build files (folder dist will create automatically)
		- "rootDir": "./src",   --- where .ts files now
		- "moduleResolution": "node",   
		and add folders 'dist', 'src'

Create folder src
In the terminal type

	$ tsc  --- it will create dist folder

Generate package.json

	$ npm init -y

Install express

	$ npm i express
	$ npm i -D typescript ts-node nodemon @types/node @types/express

In "package.json" add 

	"script": {
		"start": "node dist/app.js",
		"dev": "nodemon src/app.ts",
		"build": "tsc -p ."
	}

To run dev:

	$ npm run dev
	In browser type localhost:5000

To build:

	$ npm run build  --- it will create "dist" folder with appljs

To run build version:

	$ npm start
	In browser type --- localhost:5000