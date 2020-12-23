<!DOCTYPE html>
<html>
<head>
	<title>Ajax</title>
</head>
<body>

	<h1>Ajax</h1>

	<button id="get_data">Get Data</button>
	<br><br>

	<form id="form" method="POST" onsubmit="foo()">
		<label>Name</label>
		<input type="text" name="name" id="name_input">
		<label>Country</label>
		<input type="text" name="country" id="country_input">
		<input type="submit" name="submit">
	</form>

	<div id="container"></div>


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
			const fragment = document.createDocumentFragment();
				data.forEach(post => {
					const card = document.createElement('div');
					card.classList.add('card');
					const cardBody = document.createElement('div');
					cardBody.classList.add('card-body');
					const title = document.createElement('h3');
					title.classList.add('card-title');
					title.textContent = post.name;
					const article = document.createElement('p');
					article.classList.add('card-text');
					article.textContent = post.country;

					cardBody.appendChild(title);
					cardBody.appendChild(article);
					// console.log(cardBody);
					card.appendChild(cardBody);
					fragment.appendChild(card);
				});

				container.appendChild(fragment);
				console.log(data);
		}


		// **** POST ******************************************************


		function foo () {
			event.preventDefault();
			sendPostForm();

		}

		function sendPostForm () {
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