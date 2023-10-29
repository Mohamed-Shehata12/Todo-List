var inputType = document.querySelector("#input-type");
var buttonType = document.querySelector("#button-type");
var todoList = document.querySelector("#todo-list");

buttonType.addEventListener("click", function () {
  //Create List Item
  var listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.innerText = inputType.value;
  todoList.appendChild(listItem);
  //Create Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("remove-button");
  deleteButton.innerText = "Remove";
  listItem.appendChild(deleteButton);
  //Remove Todo List
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });
  inputType.value = " ";
});
