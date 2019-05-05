// This is using ES5

// Book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
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
};

// show alert
UI.prototype.showAlert = function(message, className) {
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
};

UI.prototype.clearFields = function() {
	document.querySelector('#title').value = '';
	document.querySelector('#author').value = '';
	document.querySelector('#isbn').value = '';
};

// delete book
UI.prototype.deleteBook = function (target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

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

	ui.deleteBook(e.target);

	// show message
	ui.showAlert('Book removed successfully!', 'success');

	e.preventDefault();
});