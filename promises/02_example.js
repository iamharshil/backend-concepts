const apiUrl =
	"https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=74.0060&current_weather=true";

fetch(apiUrl)
	.then((response) => {
		// Here response is just http wrapper.
		if (!response.ok) {
			throw new Error("error: ", response.status);
		}
		// api uses text format to send data, so we need to convert it to json format.
		// since response.json() returns a promise, we can use then to get the data from it.
		return response.json();
	})
	.then((data) => {
		console.log("Temperature: ", data.current_weather.temperature);
	})
	.catch((error) => {
		// Here if user (server) is not connected or offline, then it will throw error and catch will handle it.
		console.error("Error fetching weather data: ", error);
	})
	.finally(() => {
		console.log("Fetch request completed.");
	});
