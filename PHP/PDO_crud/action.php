<?php

	try {
		$conn = new PDO("mysql:dbname=test;host=localhost", "user", "password");
	} catch (PDOException $error) {
		echo "Connection Failed" . $error->getMessage();
	}

	/*#### Insert #############################*/

	if (isset($_POST['submit'])) {
		if (!$_POST['name']) {
			echo "<h1 style='color:red;'>Name is Required</h1>";
			exit;
		}
		if (!$_POST['country']) {
			echo "<h1 style='color:red;'>country is Required</h1>";
			exit;
		}

		$name = $_POST['name'];
		$country = $_POST['country'];

		$sql = "INSERT INTO crud_1 (name, country) VALUES (:name, :country)";
		$stmt = $conn->prepare($sql);
		$result = $stmt->execute(['name' => $name, 'country' => $country]);

		if (!$result) {
			echo "Result did not wrotten in database";
		} else {
			echo "Result wrotten successfully";

			header("Location: index.php");
		}
	}

	/*#### Update #############################*/

	if (isset($_POST['update'])) {
		$id = $_POST['id'];
		$name = $_POST['name'];
		$country = $_POST['country'];

		$sql = "UPDATE crud_1 SET name = :name, country = :country WHERE id = :id";
		$stmt = $conn->prepare($sql);
		$stmt->execute(['name' => $name, 'country' => $country, 'id' => $id]);

		echo "Result updated duccessfully";

		header("Location: index.php");
	}

	/*#### Delete #############################*/

	if (isset($_GET['del'])) {
		$id = $_GET['del'];

		$sql = "DELETE FROM crud_1 WHERE id = :id";
		$stmt = $conn->prepare($sql);
		$stmt->execute(['id' => $id]);

		echo "Result deleted successfully";

		header("Location: index.php");
	}


?>