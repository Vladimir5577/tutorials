<?php 

	try {
		$conn = new PDO("mysql:dbname=test;host=localhost", "user", "password");
	} catch (PDOException $error) {
		echo "Connection Failed" . $error->getMessage();
	}

	$update = false;
	$id = "";
	$name = "";
	$country = "";

	if (isset($_GET['edit'])) {
		$update = true;
		$id = $_GET['edit'];

		$sql = "SELECT * FROM crud_1 WHERE id = $id";
		$stmt = $conn->query($sql);
		$result = $stmt->fetch(PDO::FETCH_ASSOC);

		$name = $result['name'];
		$country = $result['country'];
	}


 ?>

<!DOCTYPE html>
<html>
	<head>
		<title>OOP CRUD</title>
	</head>
	<body>
		<h1>OOP CRUD</h1>

		<form action="action.php" method="post">
			<input type="hidden" name="id" value="<?php echo $id; ?>">
			<label>Name</label>
			<input type="text" name="name" value="<?php echo $name; ?>"><br>
			<label>Country</label>
			<input type="text" name="country" value="<?php echo $country; ?>"><br>

			<?php if ($update == false) { ?>
			<input type="submit" name="submit" value="Submit">
			<?php } else { ?>
			<input type="submit" name="update" value="Update">
			<?php } ?>
		</form>

		<h1>Database</h1>

		<table border="3" cellspacing="0" cellpadding="8">
			<tr>
				<td>Id</td>
				<td>Name</td>
				<td>Country</td>
				<td colspan="2">Action</td>
			</tr>


			<?php 

				$sql = "SELECT * FROM crud_1";
				$stmt = $conn->query($sql);
				$result = $stmt->fetchAll();

				foreach ($result as $key => $value) { ?>

			<tr>
				<td><?php echo $value['id']; ?></td>
				<td><?php echo $value['name']; ?></td>
				<td><?php echo $value['country']; ?></td>
				<td><a href="index.php?edit=<?php echo $value['id']; ?>">Edit</a></td>
				<td><a onclick="myFunction(event)" href="action.php?del=<?php echo $value['id']; ?>">Delete</a></td>
			</tr>



			<?php
				} // foreach
			 ?>


		</table>


		
		<script type="text/javascript">
			function myFunction(event) {
				if(!confirm("Do you want to continue!")) {
					event.preventDefault();
				}
			}
		</script>
	</body>
</html>