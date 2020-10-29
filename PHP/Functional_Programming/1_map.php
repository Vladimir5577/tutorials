<?php

	echo "-------------------------------------------- \n";

	$array = range(1, 10);
	// function range() - create elemetn from nim to max
	
	$result = array_map(function ($item) {
		return $item ** 2;
	}, $array);
	// function array_map() - 1 paramert function, 2 parametr - array data
	
	print_r($result);


	echo "-------------------------------------------- \n";

	$map = ['1key' => 'first value', '2key' => 'second value'];

	$result = array_map(function ($key, $value) {
		return $key . $value;
	}, array_keys($map), $map);

	print_r($result);


	echo "-------------------------------------------- \n";

?>
