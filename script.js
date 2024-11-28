const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Ladda uppgifter från localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Lägg till en ny uppgift
addButton.addEventListener('click', () => {
    if (todoList.children.length >= 5) {
        alert("You can only have 5 tasks in your todo list!");
        return;
    }

    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(task);
    saveTask(task);

    todoInput.value = "";
});

// Lägger till en uppgift till listan i DOM:en
function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener('click', () => {
        listItem.remove();
        deleteTask(task);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}

// Sparar en uppgift i localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Laddar uppgifter från localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
}

// Tar bort en uppgift från localStorage
function deleteTask(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
