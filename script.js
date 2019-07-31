//iife --> immediately invoked function expression, func is evaluated as an expression, then called immediately

//filters
const SHOW_ALL = 'show all';
const SHOW_DONE = 'show done';
const SHOW_NOT_DONE = 'show not done';

const BhargsApp = (function() {
    const state = {
        filter: SHOW_ALL,
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
    const list = document.getElementById('list')
    const allButton = document.querySelector('#all')
    const doneButton = document.querySelector('#done')
    const ongoingButton = document.querySelector('#ongoing')
    const inputField = document.querySelector('#new-todo')
    const form = document.querySelector('#form')
    const allList = document.querySelector('#all-list')
    const doneList = document.querySelector('#done-list')
    const ongoingList = document.querySelector('#ongoing-list')

    function renderTodo(todo, listRoot) {
        const listItem = createListItem(todo)
        listRoot.appendChild(listItem)
    }

    function createCheckbox(todo) {
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
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
        const elementName = todo.completed ? 'strike' : 'span'
        const element = document.createElement(elementName)
        element.innerText = todo.description
        return element
    }

    function createListItem(todo) {
        const listItem = document.createElement('li')
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

    function filterTodos(todos, filter) {
        return todos.filter((todo) => {
            if (filter === SHOW_ALL) {
                return true;
            }
            if (filter === SHOW_DONE) {
                return todo.completed;
            }
            if (filter === SHOW_NOT_DONE) {
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
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (inputField.value === "") {
            return //do nothing if input is empty
        }
        const newToDo = {
            description: inputField.value,
            completed: false,
            id: Date.now(),
        }
        state.todos = [
            ...state.todos, //spread operator
            newToDo,
        ]
        inputField.value = "";
        render();
    })
    
    function render() {
        list.innerHTML = ''
        allList.innerHTML = ''
        doneList.innerHTML = ''
        ongoingList.innerHTML = ''
        const filteredTodos = filterTodos(state.todos, state.filter)
        const getList = () => {
            if (state.filter === SHOW_ALL) {
                return allList
            }
            if (state.filter === SHOW_DONE) {
                return doneList
            }
            if (state.filter === SHOW_NOT_DONE) {
                return ongoingList
            }
            return allList;
        }
        const chosenList = getList()
        filteredTodos.forEach((item) => renderTodo(item, chosenList));
    }
    render()

    return {
        createLabel: createLabel,
        createList: createListItem,
        createText: createText,
        createCheckbox: createCheckbox,
        renderTodo, // ES6 syntax, same as key:value above if they're equal
        filterTodos,
        filters: {
            SHOW_ALL,
            SHOW_DONE, SHOW_NOT_DONE,
        }
    }
})()
//TODO input field
//TODO: add to github pages
//TODO: implement Redux
//TODO: styling!!

// preparation
// execution
// expectation

// payload = {}
// const result = TextDecoderStream(payload)
// expect(result).toEqual(something)
