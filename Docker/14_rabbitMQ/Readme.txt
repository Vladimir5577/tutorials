Build:

	$ docker-compose build  --- only for the first time

	Then run

	$ docker-compose up -d   ---  -d  = detach mode

In the browser:
	
	localhost:15672

		guest	--- login
		guest	--- password

// =========================================================

Check docker container:

	$ $ docker-compose ps

// ==============================================

To get inside container

	$ docker exec -it <container_name> bash
	or 
	$ docker exec -it <container_name> sh
