// ✅ Add new task
function addTask() {
    const input = document.getElementById("taskNameInput");
    const taskName = input.value.trim();

    if(taskName !== "") {    
        const newTask = document.createElement("li");
        const taskText = document.createElement("span");

        taskText.textContent = taskName;
        newTask.appendChild(taskText);
        editTheTask(newTask, taskText);
        addDeleteButton(newTask);

        input.value = "";
        document.getElementById("tasks").appendChild(newTask);
    }
}

// 🗑️ Add delete button to task
function addDeleteButton(theTask) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<img src='icons/trash.png' alt='delete' class='delete-icon'>`

    deleteBtn.addEventListener("click", (evt) => {
        theTask.remove();
    });

    theTask.appendChild(deleteBtn);
}

// ✏️ Add edit button to task
function editTheTask(theTask, span) {
    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<img src="icons/edit.png" alt="Edit" class="edit-icon">`;
    
    editBtn.addEventListener("click", (evt) => {
        const input = document.getElementById("taskNameInput");
        const addBtn = document.getElementById("addTaskBtn");

        input.value = span.textContent;

        const newHandler = () => {
            theTask.remove();
            addTask();
            addBtn.removeEventListener("click", newHandler);
        };

        addBtn.addEventListener("click", newHandler);
    });

    theTask.appendChild(editBtn);
}

// 🔽 Handle Enter key for task input
const taskInput = document.getElementById("taskNameInput");

taskInput.addEventListener("keypress", (evt) => {
    if(evt.key === "Enter"){
        addTask();
    }
});