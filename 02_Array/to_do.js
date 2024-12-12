const todolist = [];
const todoList = ['make dinner' , 'wash dishes'];
renderTodoList();
function renderTodoList(){ 
    let todoListHTML = '';

    for(let i=0;i<todoList.length;i++){
    const todo = todoList[i];
    const html = `<p> ${todo} </p>`;
    todoListHTML += html;
    
    }
    console.log(todoListHTML);
    document.querySelector('.show-todo').innerHTML = todoListHTML;
    

}

 

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    // console.log(name);
    todolist.push(name);
    console.log(todolist);
    // let i =0;
    // let shownElements = document.querySelector('.show-list');
    // shownElements.innerHTML = `${todolist[i]}`;
    // i++;
    inputElement.value= "";
    renderTodoList();

}
 