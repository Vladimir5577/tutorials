<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContestEntry;
use App\Events\NewEntryReceivedEvent;

class ContestEntryController extends Controller
{
    public function store(Request $request) 
    {
    	$data = $request->validate([
    		'email' => 'required|email'
    	]);

    	$contestEntry = ContestEntry::create($data);

    	NewEntryReceivedEvent::dispatch($contestEntry);
    	
    }

    
}
