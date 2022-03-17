//Importing all the common nodes needed throughout the code
const input = document.getElementById("input");
const taskListDiv = document.getElementById("task-list-div");
const addBtn = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");

//Function to handle disable attribute of add button
const onTextChange = (value) => {
  value
    ? addBtn.removeAttribute("disabled")
    : addBtn.setAttribute("disabled", "true");
};

//Functionality for adding a task
const addTask = () => {
  // Importing all required nodes
  const listOfTasks = document.getElementById("list");
  const numOfTasks = listOfTasks.children.length;
  const newTask = document.createElement("li");
  const newCheckBox = document.createElement("input");
  const labelForCheckBox = document.createElement("label");
  const deleteButton = document.createElement("button");

  //Detailing the checkbox and its label used for displaying added task
  newCheckBox.type = "checkbox";
  newCheckBox.value = input.value;
  const inputId = `checkbox${input.value}${numOfTasks}`;
  newCheckBox.id = inputId;
  newCheckBox.classList.add("task-checkbox");

  labelForCheckBox.htmlFor = inputId;
  labelForCheckBox.innerHTML = input.value;
  labelForCheckBox.classList.add("label");
  labelForCheckBox.id = `label ${numOfTasks}${input.value}`;
  labelForCheckBox.setAttribute(
    "onclick",
    "handleEdit(id, innerHTML); return false"
  );

  //Detailing delete button provided for each task
  deleteButton.id = `button ${numOfTasks}${input.value}`;
  deleteButton.innerHTML = "X";
  deleteButton.setAttribute("onclick", "handleDelete(id)");
  deleteButton.classList.add("delete-button");

  //Assembling delete button and task details in li item
  newTask.appendChild(deleteButton);
  newTask.appendChild(newCheckBox);
  newTask.appendChild(labelForCheckBox);
  newTask.id = `${numOfTasks}${input.value}`;
  listOfTasks.appendChild(newTask);
  input.value = "";
  addBtn.setAttribute("disabled", "true");

  //For removing the disabled attribute of clear button
  clearBtn.removeAttribute("disabled");

  //Focusing the input for adding next task
  input.focus();
};

//Functionalities for delete button provided for each task
const handleDelete = (i) => {
  const listOfTasks = document.getElementById("list");
  const taskId = i.split(" ").slice(1).join(" ");
  const task = document.getElementById(taskId);
  listOfTasks.removeChild(task);
  if (listOfTasks.children.length === 0) {
    clearBtn.setAttribute("disabled", "true");
  }
};

//Functionalities for clear button which clears all the task at one click
const handleClear = () => {
  taskListDiv.removeChild(list);
  const newList = document.createElement("ul");
  newList.id = "list";
  taskListDiv.appendChild(newList);
  clearBtn.setAttribute("disabled", "true");
};

//Functionalities for editing the task
const handleEdit = (id, innerHTML) => {
  const newText = prompt("Enter the details", innerHTML);
  const taskLabel = document.getElementById(id);
  taskLabel.innerHTML = newText;
};
