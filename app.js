const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Lsitener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Function

function addTodo(event) {
  event.preventDefault();

  //create todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create Li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // completed BTN
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<button class="trash-Y">Y</button>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Trash BTN
  const TrashButton = document.createElement("button");
  TrashButton.innerHTML = '<button class="trash-X">X</button>';
  TrashButton.classList.add("trash-btn");
  todoDiv.appendChild(TrashButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clearr todo input value

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";

        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncomleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
