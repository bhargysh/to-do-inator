function expect(left) {
    return {
        toEqual: function (right) {
            if (JSON.stringify(left) === JSON.stringify(right)) {
                console.log('pass')
                return true
            }
            throw Error(`Unequal: ${left} does not equal ${right}`)
        },
    }
}
(function () {
    console.log('Testing createLabel')
    const todo = {
        description: 'check account',
        completed: false,
        id: '134534'
    }
    const label = BhargsApp.createLabel(todo)
    expect(label.getAttribute('for')).toEqual('134534');
    expect(label.tagName).toEqual('LABEL')
})();

(function () {
    console.log('Testing createList')
    const todo = {
        description: 'check account',
        completed: false,
        id: '134534'
    }
    const list = BhargsApp.createList(todo)
    expect(list.tagName).toEqual('LI');
    expect(list.children[0].tagName).toEqual('INPUT');
    expect(list.children[1].tagName).toEqual('LABEL');
})();

(function () {
    console.log('Testing filterTodos')
    const todos = [
        {
            description: 'check account',
            completed: false,
            id: '134534'
        },
        {
            description: 'check pad',
            completed: true,
            id: '134578' 
        }
    ]
    const filteredList = BhargsApp.filterTodos(todos, BhargsApp.filters.SHOW_DONE)
    expect(filteredList).toEqual([{
        description: 'check pad',
        completed: true,
        id: '134578'
    }])
})();

