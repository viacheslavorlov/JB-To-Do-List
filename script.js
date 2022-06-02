const inputField = document.getElementById('input-task');
const addBtn = document.getElementById('add-task-button');
const ul = document.getElementById('task-list');

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];


function Task(description) {
	this.description = description;
	this.completed = false;
}

const updateLocalStorage = function () {
	if (taskList.length > 0) {
		localStorage.setItem('tasks', JSON.stringify(taskList));
	}
}

function createNewTask(value) {
	if (value.length > 0) {
		let taskField = document.createElement('li')
		taskField.innerHTML = `
				<input type="checkbox">
	            <span class="task">${value}</span>
	            <button class="delete-btn" type="button" onClick="deleteTask(this)">Delete</button>
        	`



		ul.insertAdjacentElement('beforeend', taskField);
	}
}

taskList.forEach(task => {
	if (task.description.length !== '') {
		createNewTask(task.description);
	}
});


function deleteTask(e) {
	let parent = e.parentNode;      // get current task parent (li)
	const deleteTarget = parent.querySelector('span').textContent;
	taskList = taskList.filter(item => item.description !== deleteTarget);
	updateLocalStorage();
	ul.removeChild(parent);   // remove li from ul
	// +удалить из списка

}

addBtn.addEventListener('click', () => {
		createNewTask(inputField.value);
		taskList.push(new Task(inputField.value));//add task to taskList
		updateLocalStorage();//add task to local STORAGE!
		inputField.value = "";//clear input field
	}
);

    © 2022 GitHub, Inc.

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About


