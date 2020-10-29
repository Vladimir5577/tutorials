<?php

	$array = ['Bob', 'Jack', 'Mike'];

	function new_array ($arr, $fun) {
		$change_array = [];
		foreach ($arr as $key => $value) {
			array_push($change_array, $fun($value));
		}

		return $change_array;
	}

	$result =  new_array($array, function ($a) {
		return ' My name is: ' . $a;
	});
	

	print_r($result);





?>
