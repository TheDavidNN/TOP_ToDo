const tasksContainer = (function () {

    const createTaskElement = (task) => {
        let taskElement = document.createElement("div");
        taskElement.innerHTML = `
        <p> ${task.getTitle()} </p>
        `;

        return taskElement;
    };

    const getNoProjectElement = () => {
        let noProjectElement = document.createElement("div");
        return noProjectElement;
    };

    const getDefaultTaskElement = () => {
        let noTasksElement = document.createElement("div");
        noTasksElement.innerHTML = `
        <p>No tasks</p>
        `;
        return noTasksElement;
    };

    const renderTasks = (containerElement, project) => {
        if (project != null) {
            if (project.getCurrentProject() != null) {
                const tasks = project.getTasks();
                containerElement.innerHTML = "";
                for (const task of tasks) {
                    contentElement.appendChild(createTaskElement(task));
                }
            } else {
                console.log("No tasks in this project!");
                const noTasksElement = getDefaultTaskElement();
                containerElement.appendChild(noTasksElement);
            }
        }
        else {
            console.log("No project!")
            const noProjectElement = getNoProjectElement();
            containerElement.appendChild(noProjectElement);
        }
    };

    return { renderTasks };
})();

export default tasksContainer;