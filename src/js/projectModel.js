function projectModel(name, id) {
    let tasks = [];

    const getName = () => _name;
    const setName = (newName) => { _name = newName; }

    const getId = () => _id;

    const getTasks = () => tasks;
    const addTask = (task) => { tasks.push(task); };
    /**
     * Removes the first task with a given Id
     * @param {*} taskId 
     */
    const removeTask = (taskId) => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].getId === taskId) {
                tasks.splice(i, 1);
            }
        }
    };

    return { getName, setName, getId, getTasks, addTask, removeTask };
}

export default projectModel;