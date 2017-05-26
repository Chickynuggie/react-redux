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

const editTodo = (todo) => ({
    type: 'EDIT_TODO',
    todo
})

const closeEditform = () => ({
    type: 'CLOSE_EDITFORM'
})

const saveTodo = (id, newText, newDesc) => ({
    type: 'SAVE_TODO',
    id,
    newText,
    newDesc
})

export { addTodo, removeTodo, toggleTodo, updateProgress, editTodo, closeEditform, saveTodo };