<!DOCTYPE html>
<html>
<head>
	<title>Ajax</title>
</head>
<body>

	<h1>Ajax</h1>

	<button id="get_data">Get Data</button>
	<br><br>

	<form id="form_data" method="POST" onsubmit="foo()">
		<label>Name</label>
		<input type="text" name="name" id="name_input">
		<label>Country</label>
		<input type="text" name="country" id="country_input">
		<input type="submit" name="submit">
	</form>

<div id="container"></div>

	<table border="4" cellspacing="0" cellpadding="8">
		<thead>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Country</th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>


	<script type="text/javascript">

		// *** GET ***************************************************

		document.getElementById('get_data').addEventListener('click', getData);

		var container = document.getElementById('container');

		// get data
		function getData () {
			fetch('http://localhost:8888/process.php')
			.then(res => res.json())
			.then(data => putDataInHTML(data))
			.catch(error => console.log('Error has occur'));
		}

		// append data to HTML
		function putDataInHTML (data) {
			const tbody = document.querySelector('tbody');
				data.forEach(user => {
					const tr = document.createElement('tr');
					tr.innerHTML = `
							<td>${user.id}</td>
							<td>${user.name}</td>
							<td>${user.country}</td>
						`;
					tbody.append(tr);
				});

				console.log(data);
		}


		// **** POST ******************************************************


		function foo () {
			event.preventDefault();
			sendPostForm();

		}

		function sendPostForm () {
			let form_data = document.getElementById('form_data');
			let name_input = document.getElementById('name_input').value;
			let country_input = document.getElementById('country_input').value;
			console.log(name_input, country_input);

			fetch('http://localhost:8888/process.php', {
				method: 'POST',
				headers: {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				body: `name=${name_input}&country=${country_input}`,
			})
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error has occur'));

			getData();
			form_data.reset();
		}

		// console.log(document.getElementById('name_input').value);
		
		

		/*
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
		*/


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