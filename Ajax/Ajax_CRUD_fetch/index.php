<!DOCTYPE html>
<html>
<head>
	<title>Ajax Crud</title>
	<style type="text/css">
		body {background: #F8F8F8;}
		.container { width: 80%; margin: auto;}
		.row-6 { width: 45%; }
		.database {	float: left; }
		.details { float: right; }
	</style>
</head>
<body>

	
	<div class="container">

		<h1>Ajax Crud</h1>
		
		<div class="row-6 database">

			<button id="get_data">Get Data</button>
			<br><br>

			<form id="data_form" method="POST" onsubmit="createUser()">
				<label>Name</label>
				<input type="text" name="name" id="name_input">
				<label>Country</label>
				<input type="text" name="country" id="country_input">
				<input type="submit" name="submit" id="submit_form" value="Submit" style="background: #A2FF33;">
			</form>

			<br>

			<table border="4" cellspacing="0" cellpadding="8">
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Country</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

<<<<<<< HEAD
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
=======
		</div>		

		<div class="row-6 details">
				<h1>Details</h1>
			<div id="details"></div>
		</div>	
>>>>>>> 92f6dde23450bf68dc5953db48144c678fcb93ca

	</div><!-- End container -->

<!-- ### JavaScript ############################################################ -->

	<script type="text/javascript">

		// *** GET ***************************************************

		document.getElementById('get_data').addEventListener('click', getData);

		const data_form = document.getElementById('data_form');
		const submit_form = document.getElementById('submit_form');
		const tbody = document.querySelector('tbody');
		const div_details = document.getElementById('details');

		// get data
		function getData () {
			fetch('http://localhost:8888/process.php')
			.then(res => res.json())
			.then(data => putDataInHTML(data))
			.catch(error => console.log('Error has occur'));
		}

		// append data to HTML
<<<<<<< HEAD
		function putDataInHTML (data) {
			const tbody = document.querySelector('tbody');
=======
		function putDataInHTML (data) {	
				tbody.innerHTML = '';
>>>>>>> 92f6dde23450bf68dc5953db48144c678fcb93ca
				data.forEach(user => {
					const tr = document.createElement('tr');
					tr.innerHTML = `
							<td>${user.id}</td>
							<td>${user.name}</td>
							<td>${user.country}</td>
<<<<<<< HEAD
						`;
					tbody.append(tr);
				});

				console.log(data);
=======
							<td>
								<button onclick='getDetails(${user.id})'>Details</button>
								<button onclick='editUser(${user.id}, "${user.name}", "${user.country}")'>Edit</button>
								<button onclick='deleteUser(${user.id})'>Delete</button>
							</td>
						`;

					tbody.append(tr);
				});

			container.appendChild(fragment);
			console.log(data);
		}

		// delete user
		function deleteUser (id) {
			fetch(`http://localhost:8888/process.php/?delete_id=${id}`)
			.then(res => res.json())
			.then(data => putDataInHTML(data))
			.catch(error => console.log('Error has occur'));

			getData();
		}

		// edit user
		function editUser (id, name, country) {
			document.getElementById('name_input').value = name;
			document.getElementById('country_input').value = country;
			data_form.setAttribute('onsubmit', `updateUser(${id})`);
			submit_form.setAttribute('value', 'Update');
			submit_form.style.background = '#33F3FF';
		}

		// get details
		function getDetails (id) {
			fetch(`http://localhost:8888/process.php/?get_details_id=${id}`)
			.then(res => res.json())
			.then(data => {
				div_details.innerHTML = `
					<h2>Id: ${data.id}</h2>
					<h3>Name: ${data.name}</h3>
					<h3>Country: ${data.country}</h3>
				`;
			})
			.catch(error => console.log('Error has occur'));
>>>>>>> 92f6dde23450bf68dc5953db48144c678fcb93ca
		}


		// **** POST ******************************************************


		function createUser () {
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

			data_form.reset();
			getData();
		}

		// update user
		function updateUser (id) {
			event.preventDefault();

			let name_input = document.getElementById('name_input').value;
			let country_input = document.getElementById('country_input').value;
			console.log(name_input, country_input);

			fetch('http://localhost:8888/process.php', {
				method: 'POST',
				headers: {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				body: `id=${id}&name=${name_input}&country=${country_input}`,
			})
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error has occur'));

			data_form.setAttribute('onsubmit', 'createUser()');
			submit_form.style.background = '#A2FF33';
			submit_form.setAttribute('value', 'Submit');
			data_form.reset();
			getData();
			form_data.reset();
		}

		// console.log(document.getElementById('name_input').value);
		
		

		/*
		// post and get with json
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