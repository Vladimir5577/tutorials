<!DOCTYPE html>
<html>
<head>
	<title>Ajax</title>
</head>
<body>

	<h1>Ajax</h1>

	<script type="text/javascript">
		
		// post and get working
		fetch('http://localhost:8888/process.php', {
			method: 'POST',
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body: 'name=Jack&country=France'

			// body: JSON.stringify({
			// 	name: 'Bob',
			// 	country: 'Germany'
			// })
		})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(error => console.log('Error has occur'));

		/*
			// Not accomplished

			var formData = new FormData();
		formData.append("name", "Jim");
		formData.append("country", "US");
		fetch('http://localhost:8888/process.php', {
			method: 'POST',
			body: formData

			// body: JSON.stringify({
			// 	name: 'Bob',
			// 	country: 'Germany'
			// })
		})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(error => console.log('Error has occur'));


		*/

	</script>

</body>
</html>