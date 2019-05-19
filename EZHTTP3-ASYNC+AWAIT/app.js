const http = new EZHTTP;

// User Data
const data = {
	name: 'Kynt Choi',
	username: 'kyntchoi',
	email: 'kyntchoi@gmail.com'
};

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(err => console.log(err));