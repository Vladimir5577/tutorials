<?php
	
	// connection ******************************************
	try {
		$conn = new PDO("mysql:dbname=ajax_test;host=localhost", "user", "password");
	} catch (PDOExeption $error) {
		echo "Connection Failed" . $error->getMessage;
	}

	// delete user ******************************************
	if (isset($_GET['delete_id'])) {
		$id = $_GET['delete_id'];
		$sql = "DELETE FROM users WHERE id = :id";
		$stmt = $conn->prepare($sql);
		$stmt->execute(['id' => $id]);

		echo "Result deleted successfully";
	}

	// get details user ******************************************
	if (isset($_GET['get_details_id'])) {
		$id = $_GET['get_details_id'];
		$sql = "SELECT * FROM users WHERE id = $id";
		$stmt = $conn->query($sql);
		$result = $stmt->fetch(PDO::FETCH_ASSOC);

		echo json_encode($result);
		exit;
	}


	// create user/update  ******************************************
	if (isset($_POST['name'])) {
		echo $_POST['name'];
		echo $_POST['country'];

		//echo 'POST: Yout name is ' . $_POST['name'];

		$name = $_POST['name'];
		$country = $_POST['country'];
		// $country = "";

		// to create record
		if (!isset($_POST['id'])) {
			echo 'Write';
			$sql = "INSERT INTO users (name, country) VALUES (:name, :country)";
			$stmt = $conn->prepare($sql);
			$stmt->execute(['name' => $name, 'country' => $country]);

			echo "Post added successfully";
		}

		// to update record
		if (isset($_POST['id'])) {
			$id = $_POST['id'];
			$sql = "UPDATE users SET name = :name, country = :country WHERE id = :id";
			$stmt = $conn->prepare($sql);
			$stmt->execute(['name' => $name, 'country' => $country, 'id' => $id]);
			echo 'Result updated cuccessfully';

		}	
	}

	// get data
	$sql = "SELECT * FROM users";
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);





?>
