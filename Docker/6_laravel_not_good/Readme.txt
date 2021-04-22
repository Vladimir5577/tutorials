The name future laravel app shuld be laravel_app.
Install or clone project and give a name laravel_all.
	
	$ composer create-project laravel/laravel laravel_app

$ docker-compose build   ---  build
$ docker-compoe up -d 	 --- run in detach mode
$ docker-compose ps 	 --- check status

In browser type 
	- for project 
		localhost:8080/public
	- for adminer
		localhost:8085
			then enter credentials
				Server   - mysql
				username - root
				password - password

In project folder in .env pubt credentials

	DB_CONNECTION=mysql
	DB_HOST=mysql
	DB_PORT=3306
	DB_DATABASE=laravel
	DB_USERNAME=root
	DB_PASSWORD=password

To enter to the container

	$ docker-compose exec name_container bash
	in out case (from docker-compose.yml)
		$ docker-compose exec web bash

		we got in laravel_app folder in the container

	Then run migration inside container

		$ php artisan migrate

