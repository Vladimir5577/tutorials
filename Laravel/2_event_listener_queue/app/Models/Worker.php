<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Events\WorkerCreateEvent;

class Worker extends Model
{
    use HasFactory;

    protected $guarded = [];

/*
    // with event listener
    protected $dispatchesEvents = [
    	'created' => WorkerCreateEvent::class,
    ];
*/

/*
    // with boot method
    public static function boot () {
    	parent::boot();

    	static::created(function ($worker) {
    		dd('From boot', $worker);
    	});

    	static::updated(function ($worker) {
    		dd('From boot', $worker);
    	});
    }
*/

}