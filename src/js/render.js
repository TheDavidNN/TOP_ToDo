import model from "./model.js"

const render = (function () {
    const contentElement = document.querySelector("#content");

    const init = () => {
        model.init();
    }

    const renderProjects = () => {
        const projects = model.getProjects();
    }

    const renderTasks = () => {
        if (model.getCurrentProject() != null) {
            const tasks = model.getCurrentProject().getTasks();
            contentElement.innerHTML = "";
            for (const task of tasks) {
                contentElement.appendChild(createTaskElement(task));
            }
        } else {
            const noTasksElement = getDefaultTaskElement();
            contentElement.appendChild(noTasksElement);
        }
    }

    const createTaskElement = (task) => {
        let taskElement = document.createElement("div");
        taskElement.innerHTML = `
        <div>
        <p> ${task.getTitle()} </p>
        </div>
        `;

        return taskElement;
    };

    const getDefaultTaskElement = () => {

    };

    return { init, renderProjects, renderTasks };
})();

export default render;