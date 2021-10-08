Build:

	$ docker-compose build  --- only for the first time

	Then run

	$ docker-compose up -d   ---  -d  = detach mode

In the browser to see adminer:

	localhost:8085   ---  adminer
		drive	 - PostgreSQL
		server   - postgre_db
		user     - root
		password - password
		
	Port: 5432

// ==============================================

To get inside container

	$ docker exec -it <container_name> bash
	or 
	$ docker exec -it <container_name> sh

