# Curso de JS en la Web: Manipulación del DOM con JavaScript
## Realice este curso para JavaScript y:
- Aprende como funciona el DOM
- el DOM para seleccionar, modificar, eliminar y crear nuevos - elementos en el árbol de elementos
- Trabaja con componentes para facilitar la organización del proyecto
- Utiliza el sistema de módulos de Javascript para proteger los archivos

## Aulas
🧨 **Conociendo DOM**
- Presentación
- Preparando el ambiente
  - Descargue el proyecto inicial [Aquí](https://github.com/nobody-redhawk/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript.git)
- Creando tarea en HTML => OK
- Manipulando el DOM => OK
  - En la consola escribir:

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

- Recorriendo el árbol de DOM
- ¿Cómo funciona el DOM?
- Seleccionando elementos
- Haga lo que hicimos en aula
- Lo que aprendimos