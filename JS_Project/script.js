// === THEME HANDLING ===

const toggle = document.getElementById("checkbox");

const applyTheme = (theme) => {
  const isLight = theme === "light" || theme === null;

  document.body.style.backgroundColor = isLight ? "white" : "black";
  document.body.style.color = isLight ? "black" : "white";
  toggle.checked = isLight;

  document.querySelectorAll(".nav-opt").forEach(opt => {
    opt.style.color = isLight ? "black" : "white";
  });

  const submit = document.getElementById("task-submit");
  submit.style.background = isLight ? "black" : "linear-gradient(to right,rgb(201, 5, 185),rgb(0, 162, 255))";
  submit.style.color = "white";

  const nav = document.getElementById("nav");
  nav.style.borderColor = isLight ? "black" : "white";

  document.querySelectorAll(".task-item").forEach(task => {
    task.style.backgroundColor = isLight ? "" : "white";
    task.style.color = isLight ? "" : "black";
  });

  localStorage.setItem("theme", isLight ? "light" : "dark");
};

toggle.addEventListener("click", () => {
  const current = localStorage.getItem("theme");
  applyTheme(current === "light" ? "dark" : "light");
});


// === TASK HANDLING ===

const taskInput = document.getElementById("task-input");
const taskSubmit = document.getElementById("task-submit");
const taskListContainer = document.querySelector(".tasks-list");

const getTasks = () => JSON.parse(localStorage.getItem("taskList")) || [];

const saveTasks = (tasks) => localStorage.setItem("taskList", JSON.stringify(tasks));

const createTaskElement = (taskObj, index) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");

  const para = document.createElement("p");
  para.textContent = taskObj.taskContent;

  const select = document.createElement("select");
  select.className = "task-status";
  select.name = taskObj.taskContent;
  select.innerHTML = `
    <option value="not-completed">Not Completed</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
  `;
  select.value = taskObj.status;

  select.addEventListener("change", () => {
    const tasks = getTasks();
    tasks[index].status = select.value;
    saveTasks(tasks);
  });

  taskDiv.appendChild(para);
  taskDiv.appendChild(select);

  return taskDiv;
};

const renderTasks = () => {
  taskListContainer.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const taskEl = createTaskElement(task, index);
    taskListContainer.appendChild(taskEl);
  });

  // Reapply theme to new tasks
  applyTheme(localStorage.getItem("theme"));
};

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return alert("Enter a proper task");

  const tasks = getTasks();
  tasks.push({ taskContent: taskText, status: "not-completed" });
  saveTasks(tasks);
  taskInput.value = "";
  renderTasks();
};

taskSubmit.addEventListener("click", addTask);


// === ON PAGE LOAD ===

window.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("theme"));
  renderTasks();
});
