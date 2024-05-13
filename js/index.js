document.addEventListener("DOMcontentLoaded", () => {
    let todoList = document.getElementById("todo-list");
    let todoForm = document.querySelector("form");
    


todoForm.addEventListener("submit", (e) =>  {
 e.preventDefault();
 let newTodo = todoForm.querySelector("#new-todo")

 console.log(todoForm.querySelector("#new-todo").value);
addTodo(newTodo);

 todoForm.reset();

});

function addTodo (value) {
    let li = document.createElement("li");
    li.innerHTML = value;
    todoList.appelChild(li)
}

addTodo("Testing");
});