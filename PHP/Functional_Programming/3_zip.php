<?php
	
	echo "------------------------------------------------- \n";
	// use array_map()
	// [1, 2] zip with [3, 4]  [[1, 3], [2, 4]]

	$result = array_map(null, range(1, 3), range(11, 13));

	print_r($result);


	echo "------------------------------------------------- \n";

	/*
	// not working	
	// use zip()	
	$result = zip(range(21, 23), range(41, 43));

	print_r($result);

	
	echo "------------------------------------------------- \n";
	
	 */
?>
