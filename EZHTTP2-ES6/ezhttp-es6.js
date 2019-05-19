/**
 * EZHTTP Library
 * Library for making HTTP request
 *
 * @version 2.0.0
 * @author Kynt Tabudlong
 * @license MIT
 */
class EZHTTP {

	// make http GET request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	// make http POST request
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url,{
				method: 'POST',
				headers: {
					'Content-type' : 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	// make a http PUT request
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url,{
				method: 'PUT',
				headers: {
					'Content-type' : 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	// make a http DELETE request
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url,{
				method: 'DELETE',
				headers: {
					'Content-type' : 'application/json'
				}
			})
				.then(res => res.json())
				.then(() => resolve('resource deleted . . .'))
				.catch(err => reject(err));
		});
	}
}