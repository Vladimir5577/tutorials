<?php

function userConnect ($db) {
	return function ($user) use ($db) {
		echo $user . ' connected to ' . $db . "\n";
	};
}

$db = userConnect('Database');

$db('Bob');
$db('Mike');
$db('Jack');





?>
