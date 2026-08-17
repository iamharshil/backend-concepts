const testPromise = new Promise((resolve, reject) => {
	const result = 5 + 5;
	if (result === 10) {
		resolve("Fulfilled"); // it can return string, object, array anything.
	} else {
		reject("Rejected"); // it can return any type of data.
	}
});

testPromise
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.log(message);
	});
