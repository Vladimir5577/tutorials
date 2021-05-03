<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ContestEntryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// queue
Route::get('/queue', function () {
	echo 'Hello queue';
	// info('Hello to queue');
    \App\Jobs\SendMessage::withChain([
    	new App\Jobs\PrepareJob('Prepare queue job ....'),
    	new App\Jobs\PublishJob('Publish queue job ......'),
    ])->dispatch('Start queue job');
});

// event listeners
Route::get('/event', function () {
	echo 'Hello from event listeners';
	App\Models\Worker::create([
		'name' => 'Bob',
		'country' => 'Germany',
	]);
});

Route::post('/contest', [ContestEntryController::class, 'store']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
