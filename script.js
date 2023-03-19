const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector("#taskList");
const addTaskBtn = document.querySelector("#addTaskBtn");
const timeInput = document.querySelector("#timeInput");
const daySelect = document.querySelector("#daySelect");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  const taskText = document.createElement("span");
  const taskTime = document.createElement("span");
  const taskDay = document.createElement("span");

  taskText.innerText = taskInput.value;
  taskTime.innerText = timeInput.value;
  taskDay.innerText = daySelect.value;

  newTask.appendChild(taskText);
  newTask.appendChild(taskTime);
  newTask.appendChild(taskDay);

  taskList.appendChild(newTask);

  taskInput.value = "";
  timeInput.value = "";
  daySelect.selectedIndex = 0;

  newTask.addEventListener("click", function () {
    if (newTask.getAttribute("data-completed") === "true") {
      newTask.removeAttribute("data-completed");
    } else {
      newTask.setAttribute("data-completed", "true");
    }
  });
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  newTask.appendChild(deleteBtn);

  ul.appendChild(newTask);
  taskInput.value = "";
  taskTime.value = "";
  taskDay.value = "";
  addTaskBtn.disabled = true;
}

function createTask(text, time, day) {
  const li = document.createElement("li");
  const taskText = document.createElement("span");
  const taskTime = document.createElement("span");
  const taskDay = document.createElement("span");

  taskText.innerText = text;
  taskTime.innerText = time;
  taskDay.innerText = day;

  li.appendChild(taskText);
  li.appendChild(taskTime);
  li.appendChild(taskDay);

  ul.appendChild(li);

  li.addEventListener("click", function () {
    if (li.getAttribute("data-completed") === "true") {
      li.removeAttribute("data-completed");
    } else {
      li.setAttribute("data-completed", "true");
    }
  });
}

input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    addTaskBtn.removeAttribute("disabled");
  } else {
    addTaskBtn.setAttribute("disabled", "disabled");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

function deleteTask(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
  }
}

ul.addEventListener("click", deleteTask);
