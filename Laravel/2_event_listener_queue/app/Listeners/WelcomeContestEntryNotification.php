<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\WelcomeContestMail;
use Illuminate\Support\Facades\Mail;

class WelcomeContestEntryNotification
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
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        // dd($event->contestEntry->email);
        Mail::to($event->contestEntry->email)->send(new WelcomeContestMail);
    }
}
