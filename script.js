//iife --> immediately inovked function expression, func is evaluated as an expression, then called imme
(function() {
    const todos = [
        {
            description: 'check insurance',
            completed: false
        },
        {
            description: 'mow the lawn',
            completed: true
        },
        {
            description: 'ask for a raise',
            completed: false
        },
        {
            description: 'come up with a sweet REAio idea',
            completed: false
        }
    ]
    function createToDo(todo) {
        const list = document.getElementById("list")
        const data = document.createElement("li")
        data.innerText = todo.description
        list.appendChild(data)
    }
    todos.forEach(createToDo)
})()


