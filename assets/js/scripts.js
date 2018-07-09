'use strict';

const input = document.querySelector('.todo_input');
const button = document.querySelector('.input_button');
const list = document.querySelector('.todo_holder');
const display = document.querySelector('.fa-plus');
const displayArea = document.querySelector('.input_area');

let view = {
    listElements: ['li', 'span'],
    task: [],

    createElement(text) {
        let li = document.createElement(this.listElements[0]);
        let deleteButton = document.createElement(this.listElements[1]);
        deleteButton.classList.add('deleteButton');
        let deleteButtonContent = document.createTextNode('x');
        deleteButton.appendChild(deleteButtonContent);
        let textInList = document.createTextNode(text);
        li.appendChild(deleteButton);
        li.appendChild(textInList);
        return li;
    },

}

//updates the local Storage
let storage = {
    add() {
        let inputValue = input.value;
        //if there's nothing in the localStorage.todos, 
        //set Item into localStorage.todos.
        //if there's something in the localStorage.todos,
        // 1.get Whatever is there, parse it out. and push input in to tthe arr, and set it back in.
        if (!localStorage.todos) {
            view.task.push(inputValue);
            localStorage.setItem("todos", JSON.stringify(view.task));
        } else if (localStorage.todos) {
            let currentTaskArray = JSON.parse(localStorage.getItem("todos"));
            currentTaskArray.push(inputValue);

            localStorage.removeItem("todos");
            localStorage.setItem("todos", JSON.stringify(currentTaskArray));
        }
    },
    update() {
        if (localStorage.todos) {
            let todos = JSON.parse(localStorage.getItem("todos"));
            let li = document.createElement('li');

            todos.forEach(function(ele){
                li = view.createElement(ele);
                list.appendChild(li);
            })

        } 
    },
    delete(item) {
        let currentTaskArray = JSON.parse(localStorage.getItem("todos"));

        let filteredArray = currentTaskArray.filter(function(e) { return e !== item });

        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(filteredArray));
    }
}

//Updates on the DOM.
let todoFunctions = {
    add() {
        storage.add();
        let inputValue = input.value;
        view.task.push(inputValue);
        let li = document.createElement('li');
        view.task.forEach(function(ele){
            li = view.createElement(ele);
        })
        list.appendChild(li);
        input.value = "";
    },
    
    delete(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    },
}

button.addEventListener('click', function(){
    if (input.value.length === 0) {
        alert('Please enter a valid todo!');
    } else {
        todoFunctions.add();
    }
})

display.addEventListener('click', function() {
    displayArea.classList.toggle('displayNone');
  })
  
list.addEventListener('click', function(e) {

    let span="span.deleteButton";
  
    if(e.target && e.target.matches(span)) {
      todoFunctions.delete(e);
      storage.delete();
      //We have to use split/shift here because the X on the span is appended onto the innerText.
      //Must get rid of x to filter it off in localStorage.
      let text = e.target.parentNode.innerText;
      let split = text.split("");
      split.shift();
      let textToDelete = split.join("");
      storage.delete(textToDelete);
    }

  })
  
window.onload = storage.update();