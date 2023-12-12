// Function to add a todo object to the todos array
const addTodo = function (todo) {
    todos.push(todo);
  };
  
  // Function to remove an item at a given index from our todo list array
  const removeTodo = function (index) {
    todos.splice(index, 1);
  };
  
  // Function to display a todo on the DOM
  const printTodo = function (todo) {
    const li = document.createElement('li');
    li.innerText = todo.text;
    li.classList.add('todo-item');
    li.id = todo.id;
  
    if (todo.complete) {
      li.classList.add('complete');
    }
  
    const todoList = document.querySelector('.todo-list');
    todoList.appendChild(li);
  };
  
  // Function to print ALL todos
  const printAllTodos = function () {
    todos.forEach((todo) => {
      printTodo(todo);
    });
  };
  
  // Function to clear all todos from the DOM
  const clearTodos = function () {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = ''; // Clear the content inside the ol element
  };
  
  // Function to refresh the page by clearing and printing all todos
  const refreshPage = function () {
    clearTodos();
    printAllTodos();
  };
  
  // Call the printAllTodos function on page load
  document.addEventListener('DOMContentLoaded', function () {
    printAllTodos();
  });
  
  // Event listener for the "Add" button
  document.querySelector('.add-todo').addEventListener('click', function () {
    // Query the input box and save it to a variable
    const inputBox = document.querySelector('.todo-input');
  
    // Create a todo object
    const todo = {
      text: inputBox.value,
      priority: 2,
      complete: false,
      id: todos.length, // Assign a unique id based on the current length of the todos array
    };
  
    // Add the todo object to the array and print it on the DOM
    addTodo(todo);
    printTodo(todo);
  
    // Stretch goal: Remove all text from the input box
    inputBox.value = '';
  });
  
  // Event listener for the "Clear Todos" button
  document.querySelector('.clear-todos').addEventListener('click', function () {
    // Clear all todos from the DOM and the todos array
    clearTodos();
    todos.length = 0;
  });
  
  // Event listener for the "Remove Todos" button (Stretch goal)
  document.querySelector('.remove-todos').addEventListener('click', function () {
    // Clear all todos from the DOM and the todos array
    clearTodos();
    todos.length = 0;
  });
  
  // And you're DONE with the best interface we've written yet for a todos app!
  

//   Make sure to add the corresponding buttons in your HTML with classes like clear-todos and remove-todos for the clear and remove todos buttons, respectively.