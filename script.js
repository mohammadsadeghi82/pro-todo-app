let todoText = document.querySelector(".todo-text");
let add_todo = document.querySelector(".bi-plus");
let ulElem = document.querySelector("ul");
let counter = document.querySelector(".count");
let clearAll = document.querySelector(".clearAll");

let todo_item = []

add_todo.addEventListener("click", (event) => {

  let todoObj = {
    title: todoText.value
  }

  todo_item.push(todoObj)

  InsertToLocalStorage(todo_item);
  createTodoList(todo_item);
});

function removeTodo(ev) {
  ev.target.parentElement.remove();
  counter.innerHTML--;
}

function InsertToLocalStorage(todo_item) {
  localStorage.setItem("todo", JSON.stringify(todo_item));
  ulElem.innerHTML = ''

  getFromLocalStorage(todo_item);
}

function createTodoList(todoItem) {

  ulElem.innerHTML = ''
  todoItem.forEach(todo => {
    ulElem.insertAdjacentHTML('beforeend' , '<li>'+todo.title+'<i class="bi bi-trash"></li></li>')
    let trashBtn = document.querySelector('.bi-trash')

      trashBtn.addEventListener("click", removeTodo);

  });
  counter.innerHTML++;
  todoText.value = "";
}

function getFromLocalStorage(todo_item) {
  let todoValue = localStorage.getItem('todo');

  if (todoValue) {
    let givValue = JSON.parse(todoValue);

    createTodoList(givValue);
  }
}

window.addEventListener(
  'load', getFromLocalStorage()
)

clearAll.addEventListener("click", () => {
  ulElem.innerHTML = "";
  counter.innerHTML = 0;
});
