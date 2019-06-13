//iife --> immediately inovked function expression, func is evaluated as an expression, then called immediately
(function() {
    const todos = [
        {
            description: 'check insurance',
            completed: false,
            id: '134534'
        },
        {
            description: 'mow the lawn',
            completed: true,
            id: '256756'
        },
        {
            description: 'ask for a raise',
            completed: false,
            id: '33456575'
        },
        {
            description: 'come up with a sweet REAio idea',
            completed: false,
            id: '4345'
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
        checkbox.setAttribute('id', todo.id)
        checkbox.addEventListener('click', (e) => {
            todos.forEach((t) => {
                if (t.id === e.target.id) {
                    t.completed = !t.completed
                }
            })
            render()
        })
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
    
    function render() {
        list.innerHTML = ""
        todos.forEach(createTodo)
    }
    render()
})()


