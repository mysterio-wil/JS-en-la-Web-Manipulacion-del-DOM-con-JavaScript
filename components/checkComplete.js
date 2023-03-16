//?Agregado en el aula 04 'creando boton concluir'
const checkComplete = () => {
    const i = document.createElement("i");
    //? se modificó el agregó en el aula04 'concluir la tarea'
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);

        return i;
};

//? se agregó en el aula04 'concluir la tarea'

//!Inmediately invoked function expression IIFE
const completeTask = (event) => {
    /* console.log(event.target); */
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

export default checkComplete

