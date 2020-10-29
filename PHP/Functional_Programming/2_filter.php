<?php

	echo "------------------------------------------------- \n";
	echo "----  Odd Number ---- \n";

	// odd number
	$array = range(1, 10);

	// as array
	$result = array_filter($array, function ($item) {
		return $item % 2 != 0;
	});

	print_r($result);


	echo "------------------------------------------------- \n";


?>
