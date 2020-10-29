<?php

	$numbers = [3, 4, 5, 6, 7, 8 ];

	function my_filter($arr, $fun) {
		$new_array = [];
		foreach ($arr as $key => $value) {
			$data = $fun($value);
			if ($data) {
				$new_array[$key] = $value;
			}
		}
		
		return $new_array;	
	}

	$result = my_filter($numbers, function ($a) {
			return $a % 2;
	});

	print_r($result);
	

?>
