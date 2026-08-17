# DOCS

- Go through `example.js` file to understand how promises work.
- Here then works on resolved promise and catch works on rejected promise.
- Similar to example file, inside fetch same thing happens. If fetch is successful it returns a promise that resolves to the response object. If fetch fails, it returns a promise that rejects with an error. in both cases it returns different types of data in promise resolve or reject.

- Go through `02_example.js` file to understand how promises work with async/await.
- Here difference between `!response.ok` and `.catch()` is that `!response.ok` is used to check if the response from the fetch request was successful (status code 200-299). If it is not successful, it throws an error which can be caught in the catch block. On the other hand, `.catch()` is used to handle any errors that occur during the fetch request itself, such as network errors or issues with the request.


- If request can't connect to provided URL by any reason, it will be rejected and catch block will be executed. If request is successful but response is not ok, then it will be handled in `.then()` block.


- `.finally()` works right after `.then()` and `.catch()`. It will be executed regardless of whether the promise was resolved or rejected. It is often used for cleanup actions, such as hiding a loading spinner or resetting state, that should happen after the promise has settled, regardless of its outcome.