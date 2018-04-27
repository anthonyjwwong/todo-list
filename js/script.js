const input = document.querySelector('.todo_input');
const list = document.querySelector('.todo_holder');
const button = document.querySelector('.enter_input');
const display = document.querySelector('.fa-plus');
const displayImage = document.querySelector('.input_area_hidden');
let index = 0;

let view = {
  listEle: ['li', 'span'],
  createElement(text) {
    //creates both the li and span.
    let li = document.createElement(this.listEle[0]);
    let deleteButton = document.createElement(this.listEle[1]);
    //creates a class for reference in css
    deleteButton.classList.add('deleteButton');
    //X will be the delete button
    let deleteContent = document.createTextNode('x');
    //append everything
    deleteButton.appendChild(deleteContent);
    li.appendChild(deleteButton);
    li.appendChild(text);
    return list.appendChild(li);
  }
}

let todo = {
  addTodo() {
    //creating a content,
    let content = document.createTextNode(input.value);
    //create the elements and append the content//
    view.createElement(content);
    input.value = '';
  },
  deleteTodo(e) {
     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

}




button.addEventListener('click', function() {
    if (input.value.length === 0) {
      alert('You have to enter something');
    } else {
    todo.addTodo();
  }
});

list.addEventListener('click', function(e) {
  let span = "span.deleteButton";
  if (e.target && e.target.matches(span)) {
    todo.deleteTodo(e);
  }
});

display.addEventListener('click', function() {
  displayImage.classList.toggle('displayNone');
});
