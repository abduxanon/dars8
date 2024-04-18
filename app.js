document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const speedInput = document.getElementById("speed");
  const imgLinkInput = document.getElementById("imgLink");
  const colorInput = document.getElementById("color");
  const tasksList = document.getElementById("tasksList");

  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.innerHTML = `
                <p>Nomi: ${task.name}</p>
                <p>Narxi: ${task.price}</p>
                <p>Tezligi: ${task.speed}</p>
                <img src="${task.imgLink}" alt="${task.name}" />
                <p>Rangi: ${task.color}</p>
                <button onclick="deleteTask(${index})">O'chirish</button>
            `;
      tasksList.appendChild(taskItem);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({
      name: nameInput.value,
      price: priceInput.value,
      speed: speedInput.value,
      imgLink: imgLinkInput.value,
      color: colorInput.value,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    form.reset();
  });
  window.deleteTask = function (index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  };

  loadTasks();
});
