import model from "./model.js"
import projectsContainer from "./projectsContainer.js";
import tasksContainer from "./tasksContainer.js";
import formHandler from "./formHandler.js";

const render = (function () {
    const projectsElement = document.querySelector("#projects-container");
    const tasksElement = document.querySelector("#tasks-container");
    const projectFormElement = document.querySelector("#project-form");

    const init = () => {
        model.init();
        formHandler.init();
        //projectFormElement.showModal();
    }

    const renderProjects = () => {
        projectsContainer.renderProjects(projectsElement, model.getProjects());
    }

    const renderTasks = () => {
        tasksContainer.renderTasks(tasksElement, model.getCurrentProject());
    }

    return { init, renderProjects, renderTasks };
})();

export default render;