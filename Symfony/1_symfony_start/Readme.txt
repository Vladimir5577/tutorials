Install symfony globally:
	$ wget https://get.symfony.com/cli/installer -O - | bash
	It will create file in the folder in the home directory 
		.symfony/bin/symfony
	Copy this file in 
	$ sudo cp symfony /user/local/bin/

// =============================================

Install symfony:

	$ symfony new my_project

Check requirements:

	$ symfony check:req

Run symfony on php server:
	$ php -S 127.0.0.1:8000 -t public/   --- not good

Run symfony on symfony server:

	$ symfony serve

	$ symfony serve -d 	     --- to run on background
	$ symfony server:status  --- to see status
	$ symfony server:stop	 --- stop server

Install dependencies:

	$ composer require annotations
	$ composer require sec-checker 		   --- for security
	$ composer require template
	$ composer require profiler --dev
	$ composer require debug
	$ composer unpack symfony/debug-pack   --- to remove debug
	$ composer require symfony/asset

	// ======= for database =============
	$ composer require orm

	// ======= install database in docker =========
	$ composer require symfony/maker-bundle --dev
	$ ./bin/console make:docker:database
	$ docker-compose up -d   --- run container
	$ docker-compose ps		 --- to check

	// ===== enter to the container
	$ mysql -u root --password=password --host=127.0.0.1 --port=<number_port>
		*<number_port> we can find in command $ docker-compose ps  (5 digits)

	// ===== stop docker ====
	$ docker-compose down   --- will stop and remove image, data will be gone
	or 
	$ docker-compose up

	// create database
	$ symfony console doctrine:database:create

	// create table
	$ ./bin/console make:entity  --- then answer questions, it'll create file in src/Entity/
	// run migration
	$ symfony console make:migration  --- will create folder migration
	$ symfony console doctrine:migrations:migrate

	// check migration list
	$ symfony console doctrine:migrations:list


Make controller:

	$ php bin/console make:controller MainController

Check commands:

	$ php bin/console  				--- check every commands
	$ php bin/console debug:router  --- check router
	$ symfony var:export --multiline --- check env

12 accomplish



 