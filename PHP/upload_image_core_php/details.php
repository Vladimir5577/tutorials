<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>

	<body>
		<?php 
			require('connection.php');

			if (isset($_GET['details'])) {
				echo $_GET['details'];
				$id = $_GET['details'];
				$sql = "SELECT id, image, text FROM upload_image WHERE id=$id";
				$result = mysqli_query($conn, $sql);

				$row = mysqli_fetch_assoc($result);

				echo $row['id'];
				echo "<img src='images/" . $row['image'] . "'>";
				echo $row['text'];
			}

		?>

	</body>
</html>