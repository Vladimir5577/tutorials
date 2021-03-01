Init project:

	$ npm init -y
	$ npm install typescript nodemon ts-node prettier
	$ tsc --init
	$ npm install express body-parser dotenv 
	$ npm install --save-dev @types/express @types/body-parser @types/dotenv

	in package.json change
		"main": "index.js" => "main": "source/server.ts",
	in package.json add
		"script": {
			"build": "rm -rf build/ && prettier --write source/ && tsc"
		}
	in tsconfig.json uncommented line and add 'build'
		"outDir": "./build",   


https://www.youtube.com/watch?v=vyz47fUXcxU&ab_channel=TheNerdyCanuck