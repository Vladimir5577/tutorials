<?php

	try {
		$conn = new PDO("mysql:dbname=ajax_test;host=localhost", "user", "password");
	} catch (PDOExeption $error) {
		echo "Connection Failed" . $error->getMessage;
	}

	if (isset($_POST['name'])) {
		//echo 'POST: Yout name is ' . $_POST['name'];

		$name = $_POST['name'];
		// $country = $_POST['country'];
		$country = "";

		$sql = "INSERT INTO users (name, country) VALUES (:name, :country)";
		$stmt = $conn->prepare($sql);
		$stmt->execute(['name' => $name, 'country' => $country]);

		//echo "Post added successfully";
	}

	// get data
	$sql = "SELECT * FROM users";
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll();
	echo json_encode($result);





?>
