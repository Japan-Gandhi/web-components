var taskCounter;

function addTask(event) {
  event.preventDefault();
  var taskList = document.getElementById("task-list");
  var textbox = document.getElementById("add-new");
  var taskBox = document.createElement("div");
  var newTask = document.createElement("li");
  var newCheckbox = document.createElement("input");

  if (textbox.value == "") {
    return false;
  }

  taskBox.className = "task-box";

  newCheckbox.type = "checkbox";
  newCheckbox.id = "task-" + (taskList.children.length + 1);
  taskCounter++;

  var newLabel = document.createElement("label");

  newLabel.setAttribute("for", newCheckbox.id);

  newLabel.textContent = textbox.value;

  newTask.appendChild(newCheckbox);
  newTask.appendChild(newLabel);
  taskBox.appendChild(newTask);
  taskList.appendChild(taskBox);

  textbox.value = "";
}

function deleteList() {
  
   var taskList = document.getElementById("task-list");
   taskList.innerHTML = "";
  
  // for (var i = 1; i <= taskCounter; i++) 
  // {
  //   // task = document.getElementById("task-" + i);
  //   // task.innerHtml = "";
  // }
}
