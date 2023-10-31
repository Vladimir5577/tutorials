Run:

	$ docker-compose build  --- only for the first time
	then
	$ docker-compose up

To see runnung containers:

	$ docker-compose ps 

To see what going on:

	$ docker ps

	$ docker image ls  --- to see all images

// ==============================================

To get inside container

	$ docker exec -it <container_name> bash
	or 
	$ docker exec -it <container_name> sh

