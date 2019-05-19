const http = new ezhttp();

// Create Data
const data = {
	'title' : 'Custom Post',
	'body' : 'This is a custom post.',
};

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		document.body.innerText = response;
// 	}
// });

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// Update a post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// Delete a post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(response);
// 	}
// });