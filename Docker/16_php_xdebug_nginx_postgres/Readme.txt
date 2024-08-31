Build:

	$ docker-compose build  --- only for the first time
	Then run
	$ docker-compose up -d   ---  -d  = detach mode

// ==============================================

The first run.
---------------
Create database "users".

Xdebug.
---------
The first thing to look for is whether “Step Debugger” is listed as ✔ enabled.
for this put function --- xdebug_info();
to see log xdebug, go to container and
    $ vim /tmp/xdebug.log

// ==============================================
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
