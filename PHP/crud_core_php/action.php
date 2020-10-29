<?php 

	require("connection.php");

	// insert record

	if (isset($_POST['submit'])) {
		$name1 = $_POST['name1'];
		$name2 = $_POST['name2'];

		$sql = "INSERT INTO crud_2 (name1, name2) VALUES ('$name1', '$name2')";
		$result = mysqli_query($conn, $sql);

		if (!$result) {
			echo "The result was not wrotten into database!";
		} else {
			echo "The result wrotten successfully";
		}

		header ("location: index.php");
	}
	
	// edit record

	if (isset($_POST['update'])) {
		$id = mysqli_real_escape_string($conn, $_POST['id']);
		$name1 = mysqli_real_escape_string($conn, $_POST['name1']);
		$name2 = mysqli_real_escape_string($conn, $_POST['name2']);

		$sql = "UPDATE crud_2 SET name1='$name1', name2='$name2' WHERE id=$id";
		$result = mysqli_query($conn, $sql);

		if (!$result) {
			echo "The result did not updated!";
		} else {
			echo "The result updated successfully";
		}

		header("location: index.php");

	}


	// Delete record

	if (isset($_GET['del'])) {
		$id = $_GET['del'];

		$sql = "DELETE FROM crud_2 WHERE id=$id";
		$result = mysqli_query($conn, $sql);

		if (!$result) {
			echo "resuld did not delete";
		} else {
			echo "The result deleted successfully";
		}
	}



 ?>