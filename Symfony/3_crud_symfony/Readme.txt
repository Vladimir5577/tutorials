Install symfony globally:
	$ wget https://get.symfony.com/cli/installer -O - | bash
	It will create file in the folder in the home directory 
		.symfony/bin/symfony
	Copy this file in 
	$ sudo cp symfony /user/local/bin/

// =============================================

Install symfony:

	$ symfony new my_project

Go to the project folder and check requirements:

	$ symfony check:req

Run symfony on symfony server:

	$ symfony serve

	$ symfony serve -d 	     --- to run on background
	$ symfony server:status  --- to see status
	$ symfony server:stop	 --- stop server

	In the browser type:   http://127.0.0.1:8000                                                                                 
Install dependencies:

	$ composer require annotations
	$ composer require template
	$ composer require make  --- for make command

	For database:

	$ composer require symfony/orm-pack
	$ composer require --dev symfony/maker-bundle

Make controller:

	$ php bin/console make:controller MainController

Working with database:

	1. Create database:
	Before create go to the .env file and put credentials, then run

	$ php bin/console doctrine:database:create

	2. Create entity (table):

	$ php bin/console make:entity
		Then answer on questons.
		Now have a new src/Entity/Worker.php file.

	$ php bin/console make:migration 				--- make migration file in migrations/Version....
  	$ php bin/console doctrine:migrations:migrate   --- to up to date migrations (create tables)

  	Add more field to existing table:
  		$ php bin/console make:entity 
  			Then type model name and add columns
  		$ php bin/console make:migration  				--- create migration
  		$ php bin/console doctrine:migrations:migrate 	--- migrate to database


Check commands:

	$ php bin/console  				--- check every commands
	$ php bin/console debug:router  --- check router
	$ symfony var:export --multiline --- check env


Created src/Entity/Worker.php file.