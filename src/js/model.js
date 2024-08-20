import projectFactory from "./projectFactory.js"
import taskFactory from "./taskFactory.js"

const model = (function () {
    let currentProject = null;
    let projects = null;

    const init = () => {
        projects = [];
    }

    const getCurrentProject = () => currentProject;

    const selectProject = (projectId) => {
        for (const p of projects) {
            if (p.getId() === projectId) {
                currentProject = p;
                return;
            }
        }
        throw new Error(`No project with ID ${projectId} found!`);
    }

    const getProjects = () => projects;

    const createProject = (projectName) => {
        const newProject = projectFactory.createProject(projectName);
        projects.push(newProject);
    }

    const createTask = (title, description, dueDate, priority, isDone) => {
        const newTask = taskFactory.createTask(title, description, dueDate, priority, isDone);
        currentProject.addTask(newTask);
    }

    return { init, getCurrentProject, selectProject, getProjects, createProject, createTask };
})();

export default model;