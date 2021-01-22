Create file:

	docker-compose.yml

Build (if need always database uncommented line 'always' in docker-compose.yml)
 
	$ docker-compose up --build   ---  for the first time next time without --build

Command for enter into container (container should be up and running)

	$ docker run -it <containerId> bash
	or 
	$ docker run -it <containerName> bash

	or
	$ docker exec -it <containerId> bash  ---  better
	then get to the database inside
	$ mysql -u root -ppassword

In browser to go to adminer

	127.0.0.1:5080   ---  adminer database
		username - root
		password - password

Run container (without build)

	$ docker-compose up		 ---  interactive mode
	$ docker-compose up -d   ---  detach mode		 


Database running on the port 3307 (look in docker-compose.yml file)

To check:

	$ docker ps

-it   ---  run in interactive mode
-d    ---  run in detach mode
