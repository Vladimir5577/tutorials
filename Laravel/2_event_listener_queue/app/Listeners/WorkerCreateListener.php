<?php

namespace App\Listeners;

use App\Events\WorkerCreateEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class WorkerCreateListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  WorkerCreateEvent  $event
     * @return void
     */
    public function handle(WorkerCreateEvent $event)
    {
        dd('From worker listener', $event->worker);
    }
}
