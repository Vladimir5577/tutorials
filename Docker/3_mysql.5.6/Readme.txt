Create file:

	docker-compose.yml

Build (if need always database uncommented line 'always' in docker-compose.yml)

	$ docker-compose up --build

Command for enter into container (container should be up and running)

	$ docker run -it <containerId> bash

In browser to go to adminer

	127.0.0.1:5080   ---  adminer database
		username - root
		password - password

Run container (without build)

	$ docker-compose up 

Database running on the port 3307

To check:

	$ docker ps

-it   ---  run in interactive mode
-d    ---  run in detach mode


//====================================================


To get into running container

	$docker exec -t -i container_name /bin/bash
	or
	$docker exec -ti container_name /bin/bash
	or
	$docker exec -ti container_name sh
