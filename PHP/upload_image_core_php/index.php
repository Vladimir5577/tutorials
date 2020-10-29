

<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>

	<body>
		<form action="action.php" method="post" enctype="multipart/form-data">
			<input type="hidden" name="size" value="1000000">
			<input type="file" name="image">
			<textarea name="text" cols="40" rows="4" placeholder="Say something here"></textarea>
			<input type="submit" name="upload" value="upload image">
		</form>

		<?php 

			require('connection.php');

			$sql = "SELECT * FROM upload_image";
			$result = mysqli_query($conn, $sql);
			$checkResult = mysqli_num_rows($result);

			print_r($checkResult);

			if ($checkResult > 0) {
				while ($row = mysqli_fetch_assoc($result)) {
					echo $row['id'];
					echo  "<img style='height: 100px;' src='images/" . $row['image'] . "'>";
					?>
					<a href="details.php?details=<?php echo $row['id']?>">Details</a>
					<?php

					echo $row['text'];
					echo "<br><br>";
				}
			}

		?>
	</body>
</html>


