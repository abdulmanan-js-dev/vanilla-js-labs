import { getQuote, clearInput, createCard, updateCounter } from "./ui.js";

const searchInput = document.querySelector("#search-input");
const sidebarWrapper = document.querySelector("#sidebar-wrapper");
const motivationContent = document.querySelector("#motivation-content");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const form = document.querySelector("#card-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const priority = document.querySelector("#priority-emoji");
const taskList = document.querySelector("#task-list");

const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
createCard(taskArray, taskList);
updateCounter(totalTasks, completedTasks, taskArray);

const apiUrl = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

document.addEventListener("DOMContentLoaded", () => {
    getQuote(apiUrl, motivationContent);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTitle = title.value.trim();
    if (!taskTitle) return;
    clearInput(title);

    const taskDescription = description.value.trim();
    if (!taskDescription) return;
    clearInput(description);

    const taskPriority = priority.options[priority.selectedIndex].text;
    if (!taskPriority || taskPriority === "Choose priority") return;
    clearInput(priority);

    const task = {
        id: Date.now(),
        taskTitle,
        taskDescription,
        taskPriority,
        isCompleted: false,
    };

    console.log(task);
    console.log("ID type", typeof task.id);
    taskArray.push(task);
    updateCounter(totalTasks, completedTasks, taskArray);
    createCard(taskArray, taskList);
    // localStorage.setItem("tasks", JSON.stringify(taskArray));
});

taskList.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    const id = parseInt(button.dataset.id);
    const action = button.dataset.action;

    if (action === "complete") {
        
    }
});
