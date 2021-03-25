Nginx will listen laravel_app/public folder. 

!!!!  --- For testing purpose, create basic index.html file in laravel_app/public/index.html --- then remove laravel_app folder --- !!!!

To build docker:

	$ docker-compose build
	$ docker-compose up -d

	$ docker-compose stop 	--- to stop

	// === to remove ====
	$ docker-compose down   --- remove container (it will delete every data)

In the browser type;
	
	localhost:8088   --- we should see basic index.html file

Then delete "laravel_app" folder, and install laravel project

Install laravel:

	!!! --- name app should be laravel_app because it wrotten in config
	$ composer create-project laravel/laravel laravel_app

	Laravel project   --- localhost:8088
	Adminer			  --- localhost:8085
		server   - mysql
		user     - user
		password - password

If need rebuild docker;

Run migration:
	before put credentials in .env

	$ docker-compose exec php /var/www/html/artisan migrate