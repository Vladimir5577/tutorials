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

Create 'Dockerfile'.

Docker 

	$ docker build . -t react_app
	$ docker run s 	        ---  only for run
	$ ker docker run -it -p 9000:3000 -v $(pwd):/app/src react_app   ---  for run and changesudo

To get inside docker

	$ docker run -i -t --entrypoint /bin/bash <image Id>
	$ sudo docker exec -it <image id> sh

