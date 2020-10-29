<?php 

$data = ["bob", "php", "jack", "javascript", "ruby"]; //

$filered_data = []; // ["php", "javascript", "ruby"]

$polluted_indexes = [1, 3, 4]; // 

$loop_counter = 1; // 5

foreach ($data as $key => $value) { // key = 1 value = php

	$find = false; // true 

	foreach($polluted_indexes as $p_key => $p_val) { // p_key = 0 p_val  = 1
		$loop_counter++;
		if($key === $p_val){ // true
			$find = true;
			unset($polluted_indexes[$p_key]);
			break;
		}

	}

	if($find === true) {
		$filered_data[] = $value;
	}

}
var_dump($filered_data);
echo $loop_counter;

?>