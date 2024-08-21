import model from "./model.js"

const formHandler = (function(){
    const formElement = document.querySelector("#project-dialog");
    const openFormBtn = document.querySelector("#open-form-btn");
    const createProjectBtn = document.querySelector("#create-project-btn");

    const openForm = () => {
        formElement.showModal();
    }

    const closeForm = () => {
        formElement.hideModal();
    }

    const clearForm = () => {

    }

    openFormBtn.addEventListener("click", () => {
        openForm();
    });
    createProjectBtn.addEventListener("click", () => {
        model.createProject();
    });

    return {};
})();

export default formHandler;