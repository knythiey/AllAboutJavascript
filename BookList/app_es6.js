class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}

}

class UI {
	addBookToList(book) {
		const list = document.querySelector('#book-list');

		// create tr element
		const row = document.createElement('tr');

		// insert cols
		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

		list.appendChild(row);
	}

	showAlert(message, className) {
		// create div
		const div = document.createElement('div');

		// add classes
		div.className = `alert ${className}`;

		// add text
		div.appendChild(document.createTextNode(`${message}`));

		// get parent
		const container = document.querySelector('.container');

		const form = document.querySelector('#book-form');

		// insert alert
		container.insertBefore(div, form);

		// timeout after 3 seconds
		setTimeout(function() {
			document.querySelector('.alert').remove();
		}, 3000)
	}

	clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}

	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}
}

// local storage class
class Store {
	static getBooks() {
		let books;

		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static displayBooks() {
		const books = Store.getBooks();

		// instantiate UI
		const ui = new UI;

		books.forEach(function(book) {
			// add book to UI
			ui.addBookToList(book);
		})
	}

	static addBook(book) {
		const books = Store.getBooks();

		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach(function(book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listeners
// event listener for adding a book
document.querySelector('#book-form').addEventListener('submit', function(e) {
	// get form values
	const title = document.querySelector('#title').value,
		author = document.querySelector('#author').value,
		isbn = document.querySelector('#isbn').value;

	// instantiate book
	const book = new Book(title, author, isbn);

	// instantiate UI
	const ui = new UI();

	// validate
	if (title === '' || author === '' || isbn === '') {
		// Error alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);

		// add book to LS
		Store.addBook(book);

		ui.showAlert('Book added successfully!', 'success');

		// clear fields
		ui.clearFields();
	}

	e.preventDefault();
});

// event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e) {
	//instantiate UI
	const ui = new UI();

	// delete book
	ui.deleteBook(e.target);

	// remove from LS
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

	// show message
	ui.showAlert('Book removed successfully!', 'success');

	e.preventDefault();
});