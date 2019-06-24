function expect(left) {
    return {
        toEqual: function (right) {
            if (JSON.stringify(left) === JSON.stringify(right)) {
                console.log('pass')
                return true
            }
            throw Error('Unequal')
        },
    }
}

console.log('Testing createLabel')
const todo = {
    description: 'check account',
    completed: false,
    id: '134534'
}
const label = BhargsApp.createLabel(todo)
expect(label.getAttribute('for')).toEqual('134534');
// console.log(label)
// console.dir(label);
expect(label.tagName).toEqual('LABEL')