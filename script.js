//iife --> immediately inovked function expression, func is evaluated as an expression, then called immediately
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
    //element cache
    const list = document.getElementById("list")

    function createTodo(todo) {
        const listItem = createListItem(todo)
        list.appendChild(listItem)
    }

    function createCheckbox(todo) {
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = todo.completed
        return checkbox        
    }

    function createText(todo) {
        const elementName = todo.completed ? "strike" : "span"
        const element = document.createElement(elementName)
        element.innerText = todo.description
        return element
    }

    function createListItem(todo) {
        const listItem = document.createElement("li")

        const checkbox = createCheckbox(todo)
        const text = createText(todo)

        listItem.appendChild(checkbox)
        listItem.appendChild(text)

        return listItem
    }

    todos.forEach(createTodo)
})()


