Run project (make command):

	1. Build:
		$ make build
	2. Run:
		$ make run
	3. Stop
		$ make stop

// ======================================


Run in docker
	
	1. Build image:

		$ docker build -t logsapp_image:logsapp_tag .

	2. Run the container:

		$ docker run -d -p 3000:3000 --rm --name logsapp_container logsapp_image:logsapp_tag

	3. Stop:

		$ docker stop logsapp_container

Run in development mode:

	$ docker run -d -p 3000:3000 -v $(pwd):/app -v $(pwd)/data:/app/data --rm --name logsapp_container logsapp_image:logsapp_tag


// =======================================


Install project 

	$ npm install

Start app (without docker)

	$ npm start   --- with nodemon
	$ node app.js --- just run it

The difference between RUN and CMD:
	- RUN will execute when container build
	- CMD will execute when we start this container

Build the container from Dockerfile:

	$ docker build .   --- will build from Dockerfile
	or better 
	$ docker build -t <my_container_name:my_tag> .
		tag - optionally

Check running containers:

	$ docker images
	or
	$ docker image ls

		on this image we will run the container
		$ docker run <image_id>
			check 
				$ docker ps  --- to see every running containers
			stop
				$ docker stop <image_id>

Run container:

	$ docker run -d -p 3000:3000 -v logs:/app/data --env-file ./config/.env --name <my_name> --rm <image_id> <image_mane:tag_name>

		adding different name, in future we can run different container
		<image_mane:tag_name>  - optionally

		flags:
			-d 		  --- detach mode
			-p 		  --- port
			-v 		  --- volume
			--name    --- put name
			--rm 	  --- remove automatically after stop
			tag_name  --- optionally

Stop container:

	run:
		$ docker ps  --- it will show running containers
			then 
				$ docker stop <container_id>

Parameter 'run' 	--- for images
		  'start'	--- for containers

Remove all containers:

	$ docker container prune
		then check 
			$ docker ps -a
		but images remains (check)
			$ docker images 
			or
			$ docker image ls

Remove images (it is take space on the compluter):

	$ docker images  --- check images

	$ docker rmi <image_id>   --- remove by id

	$ docker image prune	  --- remove all images

s
// =========================================================

Attach

	$ docker attach <container_id>   --- to attach process ???

Logs

	$ docker logs <container_id>  --- logs ???

Volumes 

	$ docker volume ls

