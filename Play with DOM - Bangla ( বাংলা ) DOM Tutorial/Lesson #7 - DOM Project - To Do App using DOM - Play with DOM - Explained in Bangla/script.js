/*
 * Taitle: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha (Learn wiht Sumit)
 * Date: 11/15/2020
 *
*/

// select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// functions
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function (taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);




/* 
// self attemp
const inputTask = document.querySelector('#new-task');
const incompleteTasks = document.querySelector("#items");
const completeTasks = document.querySelector(".complete-list").childNodes[3];
// console.log(completeTasks);
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(form);

    // creat new task and append to the ul items
    const newTaskList = document.createElement("li");
    newTaskList.classList = "item";
    newTaskList.innerHTML = `
        <input 
            type="checkbox" 
            onclick="taskChecked(this)"/>
                <label>${inputTask.value}</label>
    `;
    // console.log(newTaskList);
    incompleteTasks.appendChild(newTaskList);
});

function taskChecked(event) {
    // console.log(event.parentElement);
    // console.log(event.checked);
    const item = event.parentElement;
    console.log(item);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = `Delete`;
    deleteButton.classList = `delete`;
    deleteButton.setAttribute("onclick", "deleteTask(this)");

    if (event.checked) {
        item.appendChild(deleteButton);
        completeTasks.appendChild(item);
    } else {
        item.removeChild(item.lastChild);
        incompleteTasks.appendChild(item);
    }
}

function deleteTask(event) {
    // console.log(event);
    // console.log(event.parentElement);
    // console.log(event.parentElement.parentElement);
    completeTasks.removeChild(event.parentElement);
} 
*/