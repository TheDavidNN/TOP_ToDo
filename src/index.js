import "./style.css";
import render from "./js/render.js";

const index = (function () {
    const init = () => {
        render.init();
        render.renderProjects();
        render.renderTasks();
    };

    return { init };
})();

index.init();