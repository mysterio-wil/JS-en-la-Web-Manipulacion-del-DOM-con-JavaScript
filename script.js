const btn = document.querySelector("[data-form-btn]");

//listener
//Arrow functions o funciones anonimas
/* btn.addEventListener("click", function(evento) { */
const createTask = (evento) => {
    /* console.log("crear tarea") */
    evento.preventDefault(); /* prevenir que la página se recargue */
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);

};
console.log(btn);

btn.addEventListener("click", createTask);


