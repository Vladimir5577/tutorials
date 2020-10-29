<?php

$mydata = ["Bob", "jack", "Bar", "Foo"];
$dt = ["Bob", "Jim", "Foo"];


function my_array_some($arr, $func) {
	foreach ($arr as $value) {
		$a = $func($value);				
		if ($a) {
			return true;
		}	
	}
	return false;
}

$exists = my_array_some($mydata, function($data) {
	return $data === "Foo";
});

var_dump($exists);

$exists2 = my_array_some($dt, function($data) {
	return $data === "Bar";
});

var_dump($exists2);
?>
