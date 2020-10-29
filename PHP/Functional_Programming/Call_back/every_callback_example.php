<?php

$data = [2, 3, 5, 4];

function my_array_every($arr, $func) {
	foreach ($arr as $value) {
		$a = $func($value);
		if (!$a) {
			return false;
		}
	}
	return true;
}
	
$res1 = my_array_every($data, function($num) {
	return $num > 1;
});

var_dump($res1);

$res2 = my_array_every($data, function($num) {
	return $num  > 3;
});

var_dump($res2);



?>


