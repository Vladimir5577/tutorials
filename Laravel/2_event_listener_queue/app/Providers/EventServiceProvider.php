<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

use App\Events\NewEntryReceivedEvent;
use App\Listeners\WelcomeContestEntryNotification;

use App\Events\WorkerCreateEvent;
use App\Listeners\WorkerCreateListener;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        NewEntryReceivedEvent::class => [
            WelcomeContestEntryNotification::class,
        ],

        WorkerCreateEvent::class => [
            WorkerCreateListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        \App\Models\Worker::observe(\App\Observers\WorkerObserver::class);
    }
}
