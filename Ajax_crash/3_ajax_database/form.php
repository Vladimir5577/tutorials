<!DOCTYPE html>
<html>
<head>
	<title>Ajax form</title>
</head>
<body>
	<h1>Ajax form</h1>

	<form id="postForm" >
		<label>Name</label>
		<input type="text" name="name" id="name_id">
		<br>
		<label>Country</label>
		<input type="text" name="country" id="country_id">
		<br>
		<input type="submit" name="submit" value="Submit">
	</form>
	<ul id="data"></ul>


	<script type="text/javascript">

		document.getElementById('postForm').addEventListener('submit', postData);

		function postData (e) {
			e.preventDefault();

			var name = document.getElementById('name_id').value;
			var params = "name=" + name;

			console.log(name);

			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'process.php', true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			xhr.onload = function () {
				if(this.status === 200) {
					console.log(this.responseText);
					var parsed = JSON.parse(this.responseText);
					var processedHtml = "";
					for (var i = 0;  i < parsed.length; i++) {
						processedHtml += '<li>'+parsed[i].name+'</li>';
					}
					document.getElementById("data").innerHTML = processedHtml;
				}
			}

			xhr.send(params);
			console.log("hait");
		}
		

	
		
	</script>

</body>
</html>