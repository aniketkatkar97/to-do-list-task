let input = document.getElementById("input");
let div = document.getElementById("result");

const addTask = () => {
    let list = document.getElementById("list");
    let tasks = list.children.length;
    let newTask = document.createElement('li');
    let details = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');

    details.type = 'checkbox';
    details.value = input.value;
    let inputid = `checkbox${input.value}${tasks}`
    details.id = inputid;
    details.classList.add('details')

    label.htmlFor = inputid;
    label.innerHTML = input.value;
    label.classList.add('label')

    deleteButton.id = `button ${input.value}${tasks}`
    deleteButton.innerHTML = "X"
    deleteButton.setAttribute('onclick', 'handleDelete(id)')

    newTask.appendChild(details);    
    newTask.appendChild(label);    
    newTask.appendChild(deleteButton);
    newTask.id = `${input.value}${tasks}`
    list.appendChild(newTask);
    input.value = ''
    console.log(list.children.length);
}

const handleDelete = (i) => {
    let list = document.getElementById("list");
    let id = i.split(" ")[1];
    let task = document.getElementById(id);
    list.removeChild(task);
    console.log();
}

const handleClear = () => {
    
}