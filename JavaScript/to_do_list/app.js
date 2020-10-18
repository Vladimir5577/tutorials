// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
	
// Functions

function addTodo (event) {
	// Prevent form from submitting
	event.preventDefault();
	// Todo Div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// Create Li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// ADD TODO TO LOCALSTORAGE
	saveLocalTodos(todoInput.value);  //  save to local storage -----------
	// CHECK MARK BUTTON
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<button class="btn-item-check">Check</button>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	// CHECK TRACH BUTTON
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<button class="btn-item-trash">Trash</button>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	// APPEND TO LIST
	todoList.appendChild(todoDiv);
	// Clear todo input value
	todoInput.value = "";
}

function deleteCheck (event) {
	const item = event.target;
	// console.log(event.target);
	// DELETE TODO
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		// Animation
		todo.classList.add('fall');
		removeLocalTodos(todo); // remove from local storage -----------
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}

	// CHECK MARK
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}


function filterTodo (event) {
	const todos = todoList.childNodes;
	console.log(todos);
	todos.forEach(function (todo) {
		switch (event.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
		}
	});
}

// Save to local starage
function saveLocalTodos (todo) {
	// check if item already exist
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos () {
	// check if item already exist
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.forEach(function (todo) {
		// Todo Div
		const todoDiv = document.createElement('div');
		todoDiv.classList.add('todo');
		// Create Li
		const newTodo = document.createElement('li');
		newTodo.innerText = todo;
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
		// CHECK MARK BUTTON
		const completedButton = document.createElement('button');
		completedButton.innerHTML = '<button class="btn-item-check">Check</button>';
		completedButton.classList.add('complete-btn');
		todoDiv.appendChild(completedButton);
		// CHECK TRACH BUTTON
		const trashButton = document.createElement('button');
		trashButton.innerHTML = '<button class="btn-item-trash">Trash</button>';
		trashButton.classList.add('trash-btn');
		todoDiv.appendChild(trashButton);
		// APPEND TO LIST
		todoList.appendChild(todoDiv);
	});
}

// Remove from local storage
function removeLocalTodos (todo) {
	// check if item already exist
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}

