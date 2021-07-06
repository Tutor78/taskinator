var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create and append a list item to the ul with an id of tasks-to-do
var taskFormHandler = function () {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // package data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEL(taskDataObj);

    // reset the form field
    formEl.reset();
}

var createTaskEL = function(taskDataObj) {
        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
    
        // create div to hold task info
        var taskInfoEl = document.createElement("div");
        // give it a class name
        taskInfoEl.className = "task-info";
        // add HTML content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        
        listItemEl.appendChild(taskInfoEl);
    
        // add entire list item to list
        tasksToDoEl.appendChild(listItemEl);
}

// on button click create a new task in the tasks-to-do ul
formEl.addEventListener("submit", taskFormHandler);
