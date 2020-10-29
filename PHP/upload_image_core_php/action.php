<?php 
	require('connection.php');
	// if upload button is pressed


	if (isset($_POST['upload'])) {
		$fileDestination = "images/" . basename($_FILES['image']['name']);
		$moveFile = move_uploaded_file($_FILES['image']['tmp_name'], $fileDestination);

		$image = $_FILES['image']['name'];
		$text = $_POST['text'];

		$sql = "INSERT INTO upload_image (image, text) VALUES ('$image', '$text')";
		$result = mysqli_query($conn, $sql);

		if (!$result) {
			echo "The file did not upload";
		} else {
			echo "<script>alert('File uploaded successfully')</script>";
		}	

	}
?>