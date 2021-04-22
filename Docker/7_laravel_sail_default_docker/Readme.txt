Create project:

	$ composer create-project laravel/laravel my_app

In project install laravel sail:

	$ composer require laravel/sail --dev

	$ php artisan sail:install   --- it will create docker-compose.yml file

		In docker-compose.yml change
			ports:
             # - '${APP_PORT:-80}:80'  to - 8088:80
         	   because local port can be expose to apache
        Then port mysql:
        	- 4306:3306

        Then add for adminer

        	adminer:
		        image: adminer
		        restart: unless-stopped  # restart continiously
		        ports:
		            - 8085:8080
		        networks:
		            - sail

		In project .env add credentials
			DB_HOST=mysql

	$ ./vendor/bin/sail up  	--- to run (maybe use sudo)
	$ ./vendor/bin/sail up -d   --- detach mode

	

		In the browser 
			localhost:8088  --- for app
			localhost:8085  --- for adminer
				credentials:
					server: mysql
					Username: sail
					password: password

Run migration:
	
	$ ./vendor/bin/sail artisan migrate

Run command inside container:

	$ ./vendor/bin/sail npm install --- for example

To get into container (we will enter to project folder)

	$ sudo docker-compose exec laravel.test bash
