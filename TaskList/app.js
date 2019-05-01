//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Core Functions
function loadEventListeners() {
	// DOM load event
	document.addEventListener('DOMContentLoaded', loadTasks);

	// add task event
	form.addEventListener('submit', addTask);

	// remove task event
	taskList.addEventListener('click', removeTask);

	// clear all task event
	clearBtn.addEventListener('click', clearTasks);

	// filter task event
	filter.addEventListener('keyup', filterTasks);
}

// load existing tasks from local storage to be displayed on UI
function loadTasks() {
	let taskList = getTasks();

	taskList.forEach(
		function(task) {
			createTaskElement(task);
		}
	)
}

// get all task from local storage
function getTasks() {
	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	return tasks;
}

// add task
function addTask(e) {
	if (taskInput.value === null) {
		alert('Add a task');
	}

	// create task li + a elements
	createTaskElement(taskInput.value);

	// store task in local storage
	storeTaskInLocalStorage(taskInput.value);

	//Clear Input
	taskInput.value = '';

	e.preventDefault();
}

// remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are you sure to remove this task?')) {
			let taskToBeRemoved = e.target.parentElement.parentElement;

			// remove from UI
			taskToBeRemoved.remove();

			// remove from local storage also
			let taskLists = getTasks();

			taskLists = removeTaskFromLocalStorage(taskLists, taskToBeRemoved);

			// set task to local storage again
			localStorage.setItem('tasks', JSON.stringify(taskLists));
		}
	}
}

// clear tasks
function clearTasks() {
	//taskList.innerHTML = '';
	// Faster
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	// clear from local storage
	clearTasksFromLocalStorage();
}

// filter tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	// querySelectorAll returns a nodeList, not an html collection unlike getElementsByClass which needs to be converted to an array
	document.querySelectorAll('.collection-item').forEach(
		function(task){
			const item = task.firstChild.textContent;

			if (item.toLowerCase().indexOf(text) != -1) {
				task.style.display = 'block';
			} else {
				task.style.display = 'none';
			}
		}
	);
}

// store task in local storage
function storeTaskInLocalStorage(task) {
	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// create Task li element
function createTaskElement(task) {
	// Create li element
	const li = document.createElement('li');

	// Add class
	li.className = 'collection-item';

	// Create text node and append to li
	li.appendChild(document.createTextNode(task));

	// Create link element
	const link = document.createElement('a');

	// add class
	link.className = 'delete-item secondary-content';

	// add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';

	// append link to li
	li.appendChild(link);

	// append li to ul
	taskList.appendChild(li);
}

// remove task from local storage
function removeTaskFromLocalStorage(taskLists, taskToBeRemoved) {
	taskLists.forEach(
		function(taskItem, index) {
			if (taskToBeRemoved.textContent === taskItem) {
				taskLists.splice(index, 1);
			}
		}
	);

	return taskLists;
}

// clear tasks from local storage
function clearTasksFromLocalStorage() {
	localStorage.removeItem('tasks');
}

