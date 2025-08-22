const api_url = "http://localhost:5000/tasks";

async function fetchTasks() {
  const res = await fetch(api_url);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task.title;
    if (task.completed) li.classList.add('completed');
    li.onclick = () => toggleComplete(task);

    li.style.backgroundColor = task.completed ? "lightgreen" : "teal";

    const delBtn = document.createElement("delBtn");

    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor = "white";
    delBtn.style.marginLeft = "10px";
    delBtn.style.cursor = "pointer";
    delBtn.style.color = "red";
    delBtn.style.fontSize = "12px";
    delBtn.style.border = "1px solid black";
    delBtn.style.padding = "5px";
    delBtn.style.borderRadius = "5px";
    delBtn.style.fontWeight = "bold";
    delBtn.style.transition = "0.3s";

    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value;
  await fetch(api_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  fetchTasks();
  console.log("Task Added");
}

async function toggleComplete(task) {
  task.completed = !task.completed;
  await fetch(`${api_url}/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${api_url}/${id}`, { method: 'DELETE' });
  fetchTasks();
}

window.onload = () => fetchTasks();