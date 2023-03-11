const btn = document.querySelector("[data-form-btn]");

//listener
//Arrow functions o funciones anonimas
/* btn.addEventListener("click", function(evento) { */
const createTask = (evento) => {
    /* console.log("crear tarea") */
    evento.preventDefault(); /* prevenir que la página se recargue */
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.querySelector("[data-task]");
    input.value = "";
    //backticks
    const content = `<div>
                        <i class="far fa-check-square icon"></i>
                        <span class="task">${value}</span> 
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`
    // value: almacena la informacion que ingresa el usuario 
    /* console.log(value); */
    /* console.log(task); */
    task.innerHTML = content;
    console.log(content);
};
console.log(btn);

btn.addEventListener("click", createTask);


