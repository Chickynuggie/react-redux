const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text
});

const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const updateProgress = () => ({
    type: 'UPDATE_PROGRESS'
})

export { addTodo, removeTodo, toggleTodo, updateProgress };