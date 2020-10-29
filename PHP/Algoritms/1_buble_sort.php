<?php

	$arr = [89, 3, 7, 9, 15, 18, 2, 25];

	echo "--------------------------------------------- \n";

	function bubbleSort ($arr) {
		$length = count($arr);
		$comparisons = 0;

		for ($i = 0; $i < $length; $i++) {
			for ($j = 0; $j < $length - 1; $j++) {
				$comparisons++;

				if ($arr[$j] > $arr[$j + 1]) {
					$tmp = $arr[$j + 1];
					$arr[$j + 1] = $arr[$j];
					$arr[$j] = $tmp;
				}
			}
		}

		echo $comparisons . " Comparisons \n";
		return $arr;
	}

	echo  implode(', ', $arr) . " - Before Sorting \n";

	// The implode() function returns a string from elements of an array

	$sorted = bubbleSort($arr);

	echo  implode(', ', $sorted) . " - After Sorting \n";
		

	echo "--------------------------------------------- \n";
	echo "-------  Refactoring  --------- \n";

	// refactoring way
	// The Goal is to minimaze the amount of comparison done.
	// Which will improve the performance of our code.


	function bubbleSortRefact ($arr) {
		$length = count($arr);
		$boundry = $length - 1;
		$comparisons = 0;

		for ($i = 0; $i < $boundry; $i++) {
			$swapped = false;
			$newBoundry = 0;	
			for ($j = 0; $j < $length - 1; $j++) {
				$comparisons++;

				if ($arr[$j] > $arr[$j + 1]) {
					$tmp = $arr[$j + 1];
					$arr[$j + 1] = $arr[$j];
					$arr[$j] = $tmp;
					$swapped = true;
					$newBoundry = $j;
				}
			}

			$boundry = $newBoundry;
			if (!$swapped) {
				break;
			}
		}

		echo $comparisons . " Comparisons \n";
		return $arr;
	}


	echo  implode(', ', $arr) . " - Before Sorting \n";

	// The implode() function returns a string from elements of an array

	$sorted_refact= bubbleSortRefact($arr);

	echo  implode(', ', $sorted_refact) . " - After Sorting \n";
		

	echo "--------------------------------------------- \n";

?>
