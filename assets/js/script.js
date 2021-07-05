var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create and append a list item to the ul with an id of tasks-to-do
var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
        
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// on button click create a new task in the tasks-to-do ul
buttonEl.addEventListener("click", createTaskHandler);
