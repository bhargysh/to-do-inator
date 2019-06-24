//iife --> immediately invoked function expression, func is evaluated as an expression, then called immediately
const BhargsApp = (function() {
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
        const label = createLabel(todo)
        const checkbox = createCheckbox(todo)
        const text = createText(todo)
        
        listItem.appendChild(checkbox)
        label.appendChild(text)
        listItem.appendChild(label)

        return listItem
    }

    function createLabel(todo) {
        const label = document.createElement('label')
        label.setAttribute('for', todo.id)
        return label
    }
    
    function render() {
        list.innerHTML = ""
        todos.forEach(createTodo)
    }
    render()

    return {
        createLabel: createLabel,
        createList: createListItem,
        createText: createText,
        createCheckbox: createCheckbox,
        createTodo, // ES6 syntax, same as key:value above if they're equal
    }
})()
//TODO input field
//TODO: tests and framework!
//TODO: add to github pages

// preparation
// execution
// expectation

// payload = {}
// const result = TextDecoderStream(payload)
// expect(result).toEqual(something)
