//Importing all the common nodes needed throughout the code
let input = document.getElementById("input");
let div = document.getElementById("result");
let add = document.getElementById("add");
let clearButton = document.getElementById('clear-button');

//Function to handle disable attribute of add button
const addChangeHandler = (e) => {
    e ? add.removeAttribute('disabled') : add.setAttribute('disabled', 'true');
}

//Functionality for adding a task
const addTask = () => {

    // Importing all required nodes
    let list = document.getElementById("list");
    let tasks = list.children.length;
    let newTask = document.createElement('li');
    let details = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');

    //Detailing the checkbox and its label used for displaying added task
    details.type = 'checkbox';
    details.value = input.value;
    let inputid = `checkbox${input.value}${tasks}`
    details.id = inputid;
    details.classList.add('details')

    label.htmlFor = inputid;
    label.innerHTML = input.value;
    label.classList.add('label')
    label.id = `label ${tasks}${input.value}`;
    label.setAttribute('onclick', 'handleEdit(id, innerHTML); return false')

    //Detailing delete button provided for each task
    deleteButton.id = `button ${tasks}${input.value}`
    deleteButton.innerHTML = "X"
    deleteButton.setAttribute('onclick', 'handleDelete(id)')
    deleteButton.classList.add('delete-button');

    //Assembling delete button and task details in li item
    newTask.appendChild(deleteButton);
    newTask.appendChild(details);    
    newTask.appendChild(label);    
    newTask.id = `${tasks}${input.value}`
    newTask.classList.add('list_items');
    list.appendChild(newTask);
    input.value = ''
    add.setAttribute('disabled', 'true')

    //For removing the disabled attribute of clear button
    clearButton.removeAttribute('disabled')

    //Focusing the input for adding next task
    input.focus()
}

//Functionalities for delete button provided for each task
const handleDelete = (i) => {
    let list = document.getElementById("list");
    let id = i.split(" ").slice(1).join(" ");
    let task = document.getElementById(id);
    list.removeChild(task);
    if(list.children.length === 0){
        clearButton.setAttribute('disabled', 'true');
    }
}

//Functionalities for clear button which clears all the task at one click
const handleClear = () => {
    div.removeChild(list);
    let newList = document.createElement('ul');
    newList.id = 'list';
    div.appendChild(newList)
    clearButton.setAttribute('disabled', 'true');
}

//Functionalities for editing the task
const handleEdit = (id, innerHTML) => {
    let newText = prompt('Enter the details', innerHTML);
    let label = document.getElementById(id);
    label.innerHTML = newText;   
}