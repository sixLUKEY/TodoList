let today = new Date()
console.log(today);
let todoList = [];

// function idNumber(){
//     todoList.indexOf(task)
// }

function addTask (){
    let task = {
        id: '',
        name: document.getElementById('task').value,
        createdDate: today,
        completed: false
    }
    todoList.push(task);
}

console.log(todoList);

function idUpdate(){
    todoList.forEach((task) => {
        task.id = todoList.indexOf(task) + 1;
    })
}



let outputBox = document.getElementById('outputBox');
function printTask (){
    outputBox.innerHTML ='';
    todoList.forEach((task) => {
        outputBox.innerHTML +=`
        <div class="task">
        Name = ${task.name}
        id = ${task.id}
        date = ${task.createdDate}
        </div>
        <br />
        `
    })
}

// printTask();
// idUpdate();

setInterval(function () {
    printTask(), idUpdate()
}, 100)