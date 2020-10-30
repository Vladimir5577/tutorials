<?php

echo "----------------------------------------------- \n";

function userConnect ($db) {
	return function ($user) use ($db) {
		echo $user . ' connected to ' . $db . "\n";
	};
}

$db = userConnect('Database');

$db('Bob');
$db('Mike');
$db('Jack');


echo "----------------------------------------------- \n";

function bla ($a, $b) {
	if ($b instanceof Closure) {  // or use function is_callable()
		return $a + $b();
	} else {
		$c = $b;
	}

	return $a + $b;
}

// case with call back
$foo = bla(5, function () {
	return 5 + 3;
});

// case without callback
// $foo_1 = bla(7, 12);

print_r($foo);

echo "\n";
echo "----------------------------------------------- \n";



?>
