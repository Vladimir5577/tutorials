Build:

	$ docker-compose build  --- only for the first time

	Then run

	$ docker-compose up -d   ---  -d  = detach mode


In the browser to see adminer:

	localhost:8081   ---  adminer
		user     - admin
		password - pass


// ==============================================

// ==============================================

To get inside container

	$ docker exec -it <container_name> bash
	or 
	$ docker exec -it <container_name> sh
