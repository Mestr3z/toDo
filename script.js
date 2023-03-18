const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector("#taskList");
const addTaskBtn = document.querySelector("#addTaskBtn");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = "";
  newTask.addEventListener("click", function () {
    if (newTask.getAttribute("data-completed") === "true") {
      newTask.removeAttribute("data-completed");
    } else {
      newTask.setAttribute("data-completed", "true");
    }
  });
}

function createTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);

  // Добавляем обработчик события для отметки выполнения задачи
  li.addEventListener("click", () => {
    li.dataset.completed = true;
  });

  // Добавляем кнопку удаления задачи
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  li.appendChild(deleteButton);

  // Добавляем обработчик события для удаления задачи
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
}

// Добавляем обработчик события для изменения доступности кнопки
input.addEventListener("input", () => {
  addTaskBtn.disabled = input.value.trim() === "";
});

// Добавляем обработчик события для отправки формы
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    createTask(text);
    input.value = "";
    addTaskBtn.disabled = true;
  }
});
