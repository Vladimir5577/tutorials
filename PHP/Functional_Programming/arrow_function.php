<?php


	$count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	echo '--- Old way ---------------------------------';
	echo "\n";

	$result = array_map(function ($n) {
		return $n * 10;
	}, $count);

	print_r($result);
	
	echo '--- New way (PHP >= 7.4) ----------------------';
	echo "\n";

	$result = array_map(fn ($n) => $n * 10, $count);

	print_r($result);

?>
