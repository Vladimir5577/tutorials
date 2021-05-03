Install symfony:

	$ composer create-project symfony/skeleton my_project_name

Then in the project:

	$ composer require make  --- for make command
	$ composer require annotation
	$ composer require symfony/web-server-bundle --dev 
	or $ composer require server
	$ composer require dump
	$ composer require template

	For database:

	$ composer require orm

	// --- ?
		$ composer require symfony/orm-pack
 		$ composer require --dev symfony/maker-bundle
	// --- ?

To see every console command:

	$ php bin/console

Make controller:

	$ php bin/console make:controller MainController

Run server:
	
	$ php bin/console server:run
	$ php bin/console server:start	 --- to run in the background
	$ php bin/console server:status  --- to see status
	$ php bin/console server:stop    --- to stop server

	in browser type 127.0.0.1:8000


Link
	https://www.youtube.com/watch?v=Bo0guUbL5uo