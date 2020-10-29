<?php

	echo "---------------------------------------------- \n";

	function userConnect ($db, $user, $callback) {
		$response = $user . ' connected to ' . $db . "\n";

		echo $callback($response);
	}

	userConnect('Database', 'Bob', function ($answer) {
		return 'Good! ' . $answer;
	});

	userConnect('MySql', 'Jack', function ($answer) {
		return 'Good! ' . $answer;
	});

	
	echo "---------------------------------------------- \n";

	function stringCase (string $a = null) {
		$response = ['up' => strtoupper($a), 'low' => strtolower($a)];
		return $response;
	}

	print_r(stringCase('Bob Ron'));
	echo "\n";

	// for call one member array
	$case = stringCase('Mike');
	echo $case['up'] . "\n";
	echo $case['low'] . "\n";

?>
