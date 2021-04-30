Install laravel:

	$ composer create-project laravel/laravel my_app

If need Install dependencies:  

	$ composer require laravel/breeze

	$ php artisan breeze:install

	$ npm install && npm run dev

To run project:

	$ php artisan serve

// ==================================================

Testing
---------

Create a test:

	$ php artisan make:test ContestRegistrationTest

Run tests:

	$ php artinsan test

	$  php artisan test ./tests/Feature/ContestRegistrationTest.php   --- complete class

	$  php artisan test --filter <method_name>						  ---  only 1 method test 

	$ ./vendor/bin/phpunit ./tests/Feature/ContestRegistrationTest.php


// ====================================================


Create a model and migration:

	$ php artisan make:model ContestEntry -mf

Create controller:

	$ php artisan make:controller ContestEntryController

Create event:

	$ php artisan make:event NewEntryReceivedEvent
	
Create listeners:

	$ php artisan make:listener WelcomeContestEntryNotification

Call event:

	event(new NameOfTheEvent($create_worker));

Create mailable:

	$ php artisan make:mail WelcomeContestMail -m emails.welcome


// =========================================================

Queue
----------


Change connection in .env in queued:
	QUEUE_CONNECTION=database

Create queued table:

	$ php artisan queue:table
	then migrate new queued table
	$ php artisan migrate

Create a job for queue:

	$ php artisan make:job SendMessage
	$ php artisan make:job PrepareJob
	$ php artisan make:job PublishJob

Run for job:

	$ php artisan queue:work

To see failed job

	$ php artisan queue:failed

Try to accomplish failed jobs:

	$ php artisan queue:retry <id_of_failed_job>  --- try to accomplish failed job with id
	$ php artisan queue:retry all				  --- try to accomplish all of failed jobs

Remove:

	$ php artisan queue:forget <id_of_failed_job> --- remove failed job
	$ php artisan queue:flush					  --- clear failed jobs table


// =========================================================

Event listeners
------------

	$ php artisan make:model Worker -m
	$ php artisna migrate

Create event:

	$ php artisan make:event WorkerCreateEvent
	$ php artisan make:listener WorkerCreateListener --event=WorkerCreateEvent

Then we need to register event listeners in Providers EventServiceProvider.php

	WorkerCreateEvent::class => [
        WorkerCreateListener::class,
    ],

Observer
----------

Create Observer:

	$ php artisan make:observer WorkerObserver --model=Worker
	Then register observer in EventServiceProvider.php in boot method


To be continue :


https://www.youtube.com/watch?v=RCb9oidcPfM