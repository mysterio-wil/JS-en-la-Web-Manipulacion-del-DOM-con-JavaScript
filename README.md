# Curso de JS en la Web: Manipulación del DOM con JavaScript

## Realice este curso para JavaScript y:

- Aprende como funciona el DOM
- el DOM para seleccionar, modificar, eliminar y crear nuevos - elementos en el árbol de elementos
- Trabaja con componentes para facilitar la organización del proyecto
- Utiliza el sistema de módulos de Javascript para proteger los archivos

## Aulas

🧨 *Conociendo DOM*

  - **Presentación**
  - **Preparando el ambiente**
    - Descargue el proyecto inicial [Aquí](https://github.com/nobody-redhawk/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript.git)
  - **Creando tarea en HTML** => OK
  - **Manipulando el DOM** => OK

    En la consola escribir:

    `document` <kbd>Enter</kbd>

    ```html
    #document
    <!DOCTYPE html>
    <html lang=​"en">
        ​<head>​…​</head>
        ​<body>​…​</body>
    ​</html>​
    ```

    `document.querySelector("li")` <kbd>Enter</kbd>

    ```html
    <li class=​"card">
        <div>​…​</div>
        ​<i class=​"fas fa-trash-alt trashIcon icon">​…​</i>
    ​</li>​
    ```

    `document.querySelector(".card")` <kbd>Enter</kbd>

    ```html
    <li class=​"card">
        <div>
            ​<i class=​"far fa-check-square icon">​…​</i>
            ​<span class=​"task">​Hacer curso de DOM​</span>
        ​</div>
        ​<i class=​"fas fa-trash-alt trashIcon icon">​…​</i>
    ​</li>​
    ```

    `document.querySelector("span")` <kbd>Enter</kbd>

    ```html
    <span class=​"task">​Hacer curso de DOM​</span>​
    ```

    `document.querySelector("span").textContent` <kbd>Enter</kbd>

    ```html
    'Hacer curso de DOM'
    ```

    `document.querySelector("span").textContent = "Aprender mas de DOM"` <kbd>Enter</kbd>

    ```html
    'Aprender mas de DOM'
    ```

  - **Recorriendo el árbol de DOM**
  
    Estamos construyendo nuestra aplicación y tenemos la siguiente estructura HTML hasta el momento:
    ```html
    <div class="mainCard">
        <div class="title">
        <img src="./assets/rocket.svg" />
        </div>
        <div>
        <form action="">
            <input
            type="text"
            name="task"
            placeholder="Nombre de la tarea"
            class="inputForm"
            autocomplete="off"
            />
            <button type="submit" class="btnCreate">
            Agregar <i class="fas fa-plus-circle"></i>
            </button>
        </form>
        </div>
        <ul class="cardsList">
        <li class="card">
            <div>
            <i class="fas fa-check-square completedIcon icon"></i>
            <span class="task">Hacer curso de DOM</span>
            <i class="fas fa-check-squareX"></i>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
        </li>
        </ul>
    </div>
    ```
    Cuando el navegador crea una representación de este documento en formato de objetos, queremos acceder al nodo que representa el párrafo y alterar su texto de manera dinámica para `Realizar curso de JavaScript`. ¿Qué código realizará esta tarea?

    Respuesta:
    ```js
    document.querySelector('span').textContent = 'Realizar curso de JavaScript'
    ```
  - **¿Cómo funciona el DOM?**
  
    ![Arbol de DOM](/assets/arbol-de-dom.png)

  - **Seleccionando elementos**

    Utilizamos el método `querySelector` para recorrer el árbol del DOM y encontrar el elemento que queremos, utilizando JavaScript. Pero, existen otro métodos que pueden ser utilizados con la misma finalidad.

    - `document.getElementById(‘id’)` selecciona el elemento por el `id`
    - `document.getElementsByClassName(‘clase’)` retorna un arreglo de los elementos por el nombre de la `clase`
    - `document.getElementsByTagName(‘tag’)` retorna un arreglo de los elementos por el nombre del `tag`
    - `document.querySelectorAll(“selector”)` regresa todos los elementos con el mismo nombre
  
  - **Haga lo que hicimos en aula**
    
    La práctica ayuda mucho en el aprendizaje. 

  - **Lo que aprendimos**
    
    Lo que aprendimos en esta aula:

    - Recorrer el árbol del DOM
    - Utilizar `querySelector` para seleccionar los elementos dentro del árbol del DOM
    - Funcionamiento de la estructura del DOM

🧨 *Comportamiento del formulario*

  - **Proyecto del aula anterior**
    Descargar [aquí](https://github.com/alura-es-cursos/1821-manipulando-dom-con-js/tree/clase01)
  - **Escuchando eventos**
  - **Capturando el valor del input**
  - **Escuchando eventos click**
  - **Comportamiento del formulario**
  - **Haga lo que hicimos en aula**
  - **Lo que aprendimos**



