<?php

	$names = ["Bob", "jack", "Foo"];


	// ["I am Bob", "I am jack", "I am Foo"]; my_map($names, cb);

	function my_map($arr, $call_back) {
		$new_arr = [];
		foreach ($arr as $value) {
			array_push($new_arr, $call_back($value));
		}
		return $new_arr;
	}

	$out = my_map($names, function($d){
		return "I am " . $d;
	});
	echo "----------------------------------";
	print_r($out)


?>
