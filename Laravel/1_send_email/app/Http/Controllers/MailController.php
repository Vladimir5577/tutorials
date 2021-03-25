<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
	public function sendEmail () {
	   
	    $details = [
	    	'title' => 'Mail from Bob',
	    	'body' => 'Bob send an email'
	    ];

	    Mail::to('vladimir160933@gmail.com')->send(new TestMail($details));
	    return 'Email sent';
	}
}
