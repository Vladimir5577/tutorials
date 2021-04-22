<?php

	$redis = new Redis;
	
	$redis->connect('127.0.0.1', 6379);

	// $redis->set('hello', 'Hello Redis'); // set data

	$data = $redis->get('hello'); // get data

	var_dump($data);




?>
