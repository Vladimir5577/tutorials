const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("got the user");
		// resolve({ user: "id" });
		reject(new Error("User not logged in"));
	}, 3000);
});

promise
	.then(user => {
		console.log(user);
	})
	.catch(err => console.log(err.message));
