let tasks = [];

// Carregar tarefas do localStorage ao iniciar
function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored);
    }
}

// Salvar tarefas no localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Renderizar tarefas na tela
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.done) span.classList.add("done");

        const btnDone = document.createElement("button");
        btnDone.textContent = "✔";
        btnDone.onclick = () => toggleDone(index);

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "🗑";
        btnRemove.onclick = () => removeTask(index);

        li.appendChild(span);
        li.appendChild(btnDone);
        li.appendChild(btnRemove);

        list.appendChild(li);
    });
}

// Adicionar tarefa
document.getElementById("taskForm").addEventListener("submit", function(e){
    e.preventDefault();
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    tasks.push({ text: text, done: false });
    saveTasks();
    renderTasks();
    input.value = "";
});

// Marcar como concluída
function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

// Remover tarefa
function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Inicialização
loadTasks();
renderTasks();