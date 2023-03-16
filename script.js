//? se agregó en el aula 04 javascript IIFE
( () => {


    const btn = document.querySelector("[data-form-btn]");

    //listener
    //Arrow functions o funciones anonimas
    /* btn.addEventListener("click", function(evento) { */
    const createTask = (evento) => {
        /* console.log("crear tarea") */
        evento.preventDefault(); /* prevenir que la página se recargue */
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        /* const task = document.querySelector("[data-task]"); */
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";
        //?Agregado en el aula 04 'creando boton concluir'
        //*backticks
        console.log(checkComplete());
        const taskContent = document.createElement('div');
        
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);


    // value: almacena la informacion que ingresa el usuario 
    /* console.log(value); */
    /* console.log(task); */
    //?Agregado en el aula 04 'creando boton concluir'
    //! task.innerHTML = content;
     
    task.appendChild(taskContent);
    task.appendChild(deleteIcon())
    list.appendChild(task);

    };
    console.log(btn);
    //?Agregado en el aula 04 'creando boton concluir'
    //* Arrow functions o funciones anónimas
    btn.addEventListener("click", createTask);
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

    const deleteIcon = () => {
        /* const content = `
                        
        <i class="fas fa-trash-alt trashIcon icon"></i>` */
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener("click", deleteTask);
        return i;

    }

    const deleteTask = (event) => {
        /* console.log("Eliminar tarea"); */
        /* console.log(event.target.parentElement); */
        const parent = event.target.parentElement;
        console.log(parent);
        parent.remove();
    }

})();

