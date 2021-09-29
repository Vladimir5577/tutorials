<?php 

	require ("connection.php");

	$id = "";
	$name1 = "";
	$name2 = "";
	$update = false;

	if (isset($_GET['edit'])) {
		$id = $_GET['edit'];

		$update = true;

		$sql = "SELECT * FROM crud_2 WHERE id=$id";
		$result = mysqli_query($conn, $sql);
		$record = mysqli_fetch_assoc($result);

		echo "Get request is working";

		$name1 = $record['name1'];
		$name2 = $record['name2'];

	}
	

 ?>

<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>

	<body>
		<form action="action.php" method="post">
			<input type="hidden" name="id" value="<?php echo $id; ?>">
			<input type="text" name="name1" value="<?php echo $name1; ?>">
			<input type="text" name="name2" value="<?php echo $name2; ?>">
			<?php if ($update == false) { ?>
			<button style="background-color: blue;" name="submit" type="submit">Write</button>
			<?php } else { ?>
			<button style="background-color: red;" name="update" type="submit">Update</button>
			<?php } ?>
		</form>

		<br><br>

		<table border="5" cellspacing="0">
			<tr>
				<td>ID</td>
				<td>Name</td>
				<td>Country</td>
				<td colspan="2">Action</td>
			</tr>

			<?php 

				

				$sql = "SELECT * FROM crud_2";
				$result = mysqli_query($conn, $sql);
				$checkResult = mysqli_num_rows($result);

				// print_r($checkResult);

				if ($checkResult > 0) {
					while ($row = mysqli_fetch_assoc($result)) { ?>

					<tr>
						<td><?php echo $row['id']; ?></td>
						<td><?php echo $row['name1']; ?></td>
						<td><?php echo $row['name2']; ?></td>
						<td><a href="index.php?edit=<?php echo $row['id']; ?>">Edit</a></td>
						<td><a href="action.php?del=<?php echo $row['id']; ?>">Delete</a></td>
					</tr>

			<?php	}
				}
			?>
		</table>

	</body>
</html>
