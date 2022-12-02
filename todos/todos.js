import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');

    await createTodo(todo);
    todoForm.reset();
    displayTodos();
    // on submit, create a todo, reset the form, and display the todos
});

// create todo state

// add async complete todo handler function
// call completeTodo
// swap out todo in array
// call displayTodos

async function displayTodos() {
    const todos = await getTodos();

    todosEl.textContent = '';
    // clear the container (.innerHTML = '')
    for (let todo of todos) {
        const todoEl = renderTodo(todo);
        // console.log(todoEl);
        todoEl.addEventListener('click', async () => {
            await completeTodo(todo.id);

            displayTodos();
        });

        todosEl.append(todoEl);
    }
    // display the list of todos,
    // call render function, pass in state and complete handler function!
    // append to .todos
}

// add page load function
window.addEventListener('load', () => {
    displayTodos();
});
// fetch the todos and store in state
// call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    'click',
    async () => {
        await deleteAllTodos();

        displayTodos();
    };
    // delete all todos
    // modify state to match
    // re displayTodos
});
