// const inputNode = document.querySelector('#input-js');
// const btnNode = document.querySelector('#btn-add');
// const plannedTaskNode = document.querySelector('#planned');

// const todos = [];

// function addTodo(userInput) {
//     let todo = {
//         id: `${Math.random()}`,
//         text: userInput,
//         isDone: false,
//     };

//     todos.push(todo);
// }

// function deleteTodo(id) {
//     todos.forEach(todo => {
//         if (todo.id == id) {
//             todo.isDone = true;
//         }
//     });
// }

// btnNode.addEventListener('click', () => {
//     let userInput = inputNode.value;
//     console.log(userInput);
//     addTodo(userInput);
//     render();
// });

// function render() {
//     let html = '';
//     todos.forEach(todo => {
//         if (todo.isDone) {
//             return;
//         }
//         html += `
//             <li>
//                 ${todo.text}
//                 <button data-id=${todo.id}>Сделано</div>
//             </li>
//         `;
//     });

//     plannedTaskNode.innerHTML = html;
//     console.log(plannedTaskNode);
// }

// plannedTaskNode.addEventListener('click', (e) => {
//     if(e.target.tagName !== 'BUTTON') {
//         return;
//     }

//     const id = e.target.dataset.id;
//     deleteTodo(id);
//     render();
// })



// addTodo('Do homework');


// console.log(todos);
// console.log(inputNode);
// console.log(btnNode);

// console.log(plannedTaskNode)


const inputNode = document.querySelector('#input-js');
const buttonNodeAdd = document.querySelector('#btn-add');
const plannedTodosContainer = document.querySelector('#planned');
const readyTodoContainer = document.querySelector('#ready');


const todos = [];

function addTodo(userInput) {
    let todo = {
        id: `${Math.random()}`,
        text: userInput,
        isDone: false,
        isVisible: true,
    }

    todos.push(todo);
}

function hideTodo(id) {
    todos.forEach(todo => {
        if(todo.id !== id) {
            return;
        }
        todo.isVisible = false;
    })
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id !== id) {
            return;
        }
        todo.isDone = true;
    });
}


function render() {
    let htmlForPlanned = '';
    let htmlForReady = '';

    todos.forEach((todo) => {
        if (!todo.isVisible) {
            return;
        }

        if (todo.isDone == true) {
            htmlForReady += `
                <li class=ready-todo>
                    <button data-id="${todo.id}" class="delete-button">.</button>
                    ${todo.text}
                </li>
            `
        } else {
            htmlForPlanned += `
                <li class="planned-todo">
                <button data-id="${todo.id}" class="done-button">.</button>
                 ${todo.text}    
                </li>
            `
        }
    });

    plannedTodosContainer.innerHTML = htmlForPlanned;
    readyTodoContainer.innerHTML = htmlForReady;
    console.log(todos)
}


buttonNodeAdd.addEventListener('click', () => {
    let userInput = inputNode.value;
    addTodo(userInput);
    render();
    inputNode.value = '';
});

inputNode.addEventListener('submit', () => {
    let userInput = inputNode.value;
    addTodo(userInput);
    render();
    inputNode.value = '';
});

plannedTodosContainer.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') {
        return;
    }

    let idOfTodo = e.target.dataset.id;
    deleteTodo(idOfTodo);
    render();
    
})

readyTodoContainer.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') {
        return;
    }

    let idOfTodo = e.target.dataset.id;
    hideTodo(idOfTodo);
    render();

})








































