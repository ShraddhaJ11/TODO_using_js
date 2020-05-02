var taskInput = document.getElementById("input");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var list = document.getElementById("list");


//New task list item
var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");

  //label
  var label = document.createElement("label");//label

  label.innerText = taskString;

  //and appending.
  listItem.appendChild(label);
  return listItem;
}



var addTask = function () {
  console.log("Add Task...");

  if (!taskInput.value)
    alert("Please provide the valid input")
  else {
    //Create a new list item with the text from the #new-task:
    var listItem = createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    list.appendChild(listItem);
    for (var i = 0, ii = list.childElementCount; i < ii; i++) {
		var elem = list.children[i];
		if((i+1)%3 === 0)
		elem.style.color = "red"
	}
    taskInput.value = "";
  }
}

//Set the click handler to the addTask function.
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);