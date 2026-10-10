const start = document.querySelector(".initiate_button");
const home = document.querySelector(".open_page"),
    app = document.querySelector(".app"),
    newTaskButton = document.querySelector('.add_btn'),
    newTaskInput = document.querySelector(".new_task_input"),
    taskDisplay = document.querySelector(".task_display"),
    checkBox = document.querySelector(".done");

start.onclick = function () {
    home.style.display = "none";
    app.style.display = "block";
}

const task = [];


newTaskButton.onclick = function () {
    if (newTaskInput.value.trim() === "") {
        return;
    } else {
        taskDisplay.innerHTML = ""
        task.push({ task: newTaskInput.value.trim(), completed: false });
        for (let addition of task) {
            console.log(addition);
            taskDisplay.innerHTML += `<div class="task_container"><input type="checkbox"class="done"> <span>${addition.task}</span></div>`;
        }
        newTaskInput.value = "";
    }

}
