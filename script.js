//iife --> immediately invoked function expression, func is evaluated as an expression, then called immediately

//filters
const SHOW_ALL = 'show all';
const SHOW_DONE = 'show done';
const SHOW_NOT_DONE = 'show not done';

const BhargsApp = (function() {
    const state = {
        filter: SHOW_DONE,
        todos: [
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
    }
    //element cache
    const list = document.getElementById("list")
    const allButton = document.querySelector("#all")
    const doneButton = document.querySelector("#done")
    const ongoingButton = document.querySelector("#ongoing")

    function renderTodo(todo) {
        const listItem = createListItem(todo)
        list.appendChild(listItem)
    }

    function createCheckbox(todo) {
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.setAttribute('id', todo.id)
        checkbox.addEventListener('click', (e) => {
            state.todos.forEach((t) => {
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

    function filterTodos(todos) {
        return todos.filter((todo) => {
            if (state.filter === SHOW_ALL) {
                return true;
            }
            if (state.filter === SHOW_DONE) {
                return todo.completed;
            }
            if (state.filter === SHOW_NOT_DONE) {
                return !todo.completed;
            }
            return true;
        })
    }

    //event listeners
    allButton.addEventListener('click', (event) => {
        state.filter = SHOW_ALL
        render()
    })
    doneButton.addEventListener('click', (event) => {
        state.filter = SHOW_DONE
        render()
    })
    ongoingButton.addEventListener('click', (event) => {
        state.filter = SHOW_NOT_DONE
        render()
    })
    
    function render() {
        list.innerHTML = ""
        const filteredTodos = filterTodos(state.todos)
        filteredTodos.forEach(renderTodo)
    }
    render()

    return {
        createLabel: createLabel,
        createList: createListItem,
        createText: createText,
        createCheckbox: createCheckbox,
        renderTodo, // ES6 syntax, same as key:value above if they're equal
    }
})()
//TODO input field
//TODO: add to github pages
//TODO: update filter
//TODO: implement Reduxop

// preparation
// execution
// expectation

// payload = {}
// const result = TextDecoderStream(payload)
// expect(result).toEqual(something)
