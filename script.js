const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemcount = 0;
let unchecked = 0;

function newTodo() {

    const item = document.createElement("li");
    const text = document.querySelector("#input").value;
    const input = document.createElement("input");
    const span = document.createElement("span");
    
    span.innerText = text;
    span.style = "margin: 15px";
    input.setAttribute("type","checkbox");
    input.setAttribute("value",text);
    input.setAttribute("class","Todo");
    input.setAttribute("onClick","check(this)");
    item.append(input);
    item.append(span);
    list.append(item);
    itemcount++;
    unchecked++;
    uncheckedCountSpan.innerText = unchecked;
    itemCountSpan.innerText = itemcount;

}

function check(checkbox) {
  if ( checkbox.checked ) {
      unchecked--;
      uncheckedCountSpan.innerText = unchecked;
  } else {
      unchecked++;
      uncheckedCountSpan.innerText = unchecked;
  }
}
