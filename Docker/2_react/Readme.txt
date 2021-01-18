In this project using react router and fetch (vanila) api.

Create react app:

	$ npx create-react-app router
	$ cd router
	$ npm start // or 'yarn start'

Install router:

	$ npm install react-router-dom

Before building add to 'package.json' homepage property with future url:
	
	...
	"homepage": "http://62.173.140.14/React/build/",
	...

Build the project: 

	$ yarn builds
============================================================

Docker 

	$ docker build . -t react_app
	$ docker run --rm -it -p 9000:3000/tcp react_app 	        ---  only for run
	$ docker run -it -p 9000:3000 -v $(pwd):/app/src react_app  ---  for run and changes

To get inside docker

	$ docker run -i -t --entrypoint /bin/bash <image Id>