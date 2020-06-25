const todoForm = document.querySelector(".js-todo-form");
const todoInput = todoForm.querySelector('.todo-input');
const todoList = document.querySelector('.js-todo-list');

const TODO_LOCAL_STORAGE = "todos";

let todos = [];

function deleteTodo(event) {
    const button = event.target;
    const li = button.parentNode;
    todoList.removeChild(li);

    const cleanTodos = todos.filter(function (todo) {
        return todo.id != li.id;
    });

    todos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(todos));
}

function paintTodo(text) {
    const li = document.createElement("li"); // create new element
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const newId = todos.length + 1;
    const todoObject = {
        text: text,
        id: newId
    }

    span.innerText = text;

    deleteButton.innerText = "✖︎";
    deleteButton.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = newId

    todoList.appendChild(li);

    todos.push(todoObject);

    saveTodos();
}

/**
 * @function handleSubmit
 * @param {Event} event 
 * @description Get input value when user submit the form and paint it on To-do list.
 */
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODO_LOCAL_STORAGE);

    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function (todo) {
            paintTodo(todo.text);
        })
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();