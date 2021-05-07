In php container added composer and symfony

!!!!!!!!!!!!!!!!!!
Docker will listen to app/public/index.php.
Future application should be name as app.
!!!!!!!!!!!!!!!!!!

// ==============================================

Build:

	$ docker-compose build  --- only for the first time

	Then run

	$ docker-compose up -d   ---  -d  = detach mode

In the browser:

	localhost:8080   ---  project
	localhost:8085   ---  adminer
		server   - mysql8-container
		user     - root
		password - password

// ==============================================

To get inside container

	$ docker exec -it <container_name> bash
	or 
	$ docker exec -it <container_name> sh

// ===============================================

To execute docker container command outside container:

	$ docker exec <container_name> composer
	$ docker exec <container_naem> mkdir test
	$ docker exec <container_name> rm -rf test

	Give permission:

	$ docker exec <container_name> chmod -R 777 .  --- everything
	$ docker exec <container_name> chmod -R 777 storage  --- certain folder

// =================================================

Symfony
----------

We can also get inside container and run command from inside.

Create symfony:

	$ docker exec <container_name> composer create-project symfony/skeleton .
	or
	$ docker exec <container_name> symfony .

Install dependencies:

	$ docker exec <container_name> composer require doctrine
	$ docker exec <container_name> composer require make

Change .env

??????
If need then give permission to the project:
	$ docker exec <container_name> chmod -R 777 .
??????

Create database:
	go to container:
	$ docker exec <container_name> bash
		go to database:
			#/ mysql -uroot -ppassword
				mysql> create database symfony_docker;

	??????
	$ docker-compose run --rm <container_name> php bin/console doctrine:database:create
	??????

Create controller

	$ docker exec <container_name> symfony console make:controller HomeController
