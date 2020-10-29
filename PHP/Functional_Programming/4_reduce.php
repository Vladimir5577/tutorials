<?php

	$array = [1, 3, 2, 9, 8, 4];

	echo "-------------------------------------------- \n";

	// find max number

	$result = array_reduce($array, function ($accumulator, $item) {
		return $item > $accumulator ? $item : $accumulator;
	}, $array[0]);

	print_r($result);

	echo "\n";
	echo "-------------------------------------------- \n";


?>
