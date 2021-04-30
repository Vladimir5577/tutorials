<?php

namespace App\Observers;

use App\Models\Worker;

class WorkerObserver
{
    /**
     * Handle the Worker "created" event.
     *
     * @param  \App\Models\Worker  $worker
     * @return void
     */
    public function created(Worker $worker)
    {
        dd('From worker observer', $worker);
    }

    /**
     * Handle the Worker "updated" event.
     *
     * @param  \App\Models\Worker  $worker
     * @return void
     */
    public function updated(Worker $worker)
    {
        //
    }

    /**
     * Handle the Worker "deleted" event.
     *
     * @param  \App\Models\Worker  $worker
     * @return void
     */
    public function deleted(Worker $worker)
    {
        //
    }

    /**
     * Handle the Worker "restored" event.
     *
     * @param  \App\Models\Worker  $worker
     * @return void
     */
    public function restored(Worker $worker)
    {
        //
    }

    /**
     * Handle the Worker "force deleted" event.
     *
     * @param  \App\Models\Worker  $worker
     * @return void
     */
    public function forceDeleted(Worker $worker)
    {
        //
    }
}
