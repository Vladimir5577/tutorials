<?php 

	// connect to the database

	$dbServername = "localhost";
	$dbUsername = "user";
	$dbPassword = "password";
	$dbName = "test";

	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	if (!$conn) {
		echo "Connection Failed!";
	} 
?>