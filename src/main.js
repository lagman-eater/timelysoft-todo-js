const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')
const todoArr = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []


function displayTodos() {
    let items = ""
    for (let i = 0; i < todoArr.length; i++) {
        items += `<div class="item">
                    <li>${todoArr[i]}</li>
                    <div class="buttons">
                       <button id="editBtn" onclick=editTodo(${i})>Edit</button>
                       <button id="deleteBtn" onclick=deleteTodo(${i})>Delete</button>
                    </div>
                  </div>`
    }
    list.innerHTML = items
}


function setItems() {
    if (!input.value.trim()) {
        alert('The field is empty')
    } else {
        todoArr.push(input.value)
        localStorage.setItem('todos', JSON.stringify(todoArr))
        location.reload()
    }
}

function deleteTodo(i) {
    todoArr.splice(i, 1)
    localStorage.setItem('todos', JSON.stringify(todoArr))
    location.reload()
}

function editTodo(i, text) {
    let editInput = document.createElement("input")
    editInput.type = "text"
    document.getElementById("editBtn").parentNode.insertBefore(editInput, document.getElementById("editBtn").nextSibling)
    itemsArray[i] = editInput.value
    localStorage.setItem('items', JSON.stringify(todoArr))
    location.reload()
}

window.onload = function () {
    displayTodos()
}