const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const currentTodos = document.getElementById('current-todos');

addTodoBtn.addEventListener('click', function() {
  const todoValue = todoInput.value;
  if (!todoValue) return;

  const todo = document.createElement('div');
  todo.innerHTML = todoValue;
  todo.classList.add('todo');
  todo.addEventListener('click', function() {
    todo.classList.toggle('completed');
  });
  currentTodos.appendChild(todo);

  todoInput.value = '';
});
