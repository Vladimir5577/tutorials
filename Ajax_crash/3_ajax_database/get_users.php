<!DOCTYPE html>
<html>

<head>
	<title>Get users</title>
</head>

<body>
	<h1>Get users</h1>

	<button id="button_1">Get users</button>

	<br><br>

	<h3>Users</h3>
	<div id="users"></div>


	<script type="text/javascript">
		document.getElementById('button_1').addEventListener('click', loadUsers);


		// get array json
		function loadUsers () {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'process.php', true);

			xhr.onload = function () {
				console.log(this.status);
				if (this.status == 200) {
					// console.log(this.responseText);
					var users = JSON.parse(this.responseText);
					
					var output = "";

					for (var i in users) {
						output += '<ul>' + 
							'<li>Id: ' + users[i].id + '</li>' +
							'<li>Title: ' + users[i].name + '</li>' +
							'<li>Country: ' + users[i].country + '</li>' +
						'</ul>';
					}
					document.getElementById('users').innerHTML = output;
				}
			}

			xhr.send();
		}

	</script>

</body>
</html>