const input = document.querySelector('.todo_input');
const button = document.querySelector('.input_button');
const list = document.querySelector('.todo_holder');
const display = document.querySelector('.fa-plus');
const displayArea = document.querySelector('.input_area');
let view = {
  listEle: ['li', 'span'],

  createElement(text) {
    //This creates the li and span
    let li = document.createElement(this.listEle[0]);
    let deleteButton = document.createElement(this.listEle[1]);
    //creates a class for reference in css//
    deleteButton.classList.add('deleteButton');
    //X will be the delete button//
    let deleteContent = document.createTextNode('x');
    //append//
    deleteButton.appendChild(deleteContent);
    li.appendChild(deleteButton);
    li.appendChild(text);
    return list.appendChild(li);
  }
}

let todo = {
  addTodos() {
    //creating a content//
    let content = document.createTextNode(input.value);
    //Create the element and append the content//
    view.createElement(content);
    input.value="";
  },
  deleteTodos(e) {
    //This removes the span that was clicked for the 'X'
    //Targets the parent node for the 'X'
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
}

button.addEventListener('click', function() {
  if(input.value.length === 0) {
    alert('Please Enter a todo');
  } else {
    todo.addTodos();
  }
})

list.addEventListener('click', function(e) {

  let span="span.deleteButton";

  if(e.target && e.target.matches(span)) {
    todo.deleteTodos(e);
  }
})

display.addEventListener('click', function() {
  displayArea.classList.toggle('displayNone');
})
