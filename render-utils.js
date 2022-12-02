export function renderTodo(todo) {
    // create a div and a p tag
    const todoDiv = document.createElement('div');
    const todoEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    todoDiv.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');

    // put the todo's text into the p tag
    todoEl.textContent = todo.todo;
    // append stuff
    todoDiv.append(todoEl);
    // add event listener for click and call handleComplete function
    //insert event handleComplete function here, but have to make it first!!
    return todoDiv;
    // return the div
}
