import model from "./model.js"
import projectsContainer from "./projectsContainer.js";
import tasksContainer from "./tasksContainer.js";

const render = (function () {
    const projectsElement = document.querySelector("#projects-container");
    const tasksElement = document.querySelector("#tasks-container");

    const init = () => {
        model.init();
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