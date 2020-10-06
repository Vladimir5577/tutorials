console.log("Start");

function loginUser (email, password, callback) {
	setTimeout(() => {
		console.log("Now we have the data");
		callback({ userEmail: email });
	}, 5000);
}

function getUserVideos (email, callback) {
	setTimeout(() => {
		callback(['video1', 'video2', 'video3']);
	}, 3000);
}

const user = loginUser("bob@bob.com", 12345678, (user) => {
	console.log(user);
	getUserVideos(user.userEmail, (videos) => {
		console.log(videos);
	});
});

console.log("Finish");
