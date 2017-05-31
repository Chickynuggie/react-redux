/* todoitem actions */

const addTodo = (text, category) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text,
    category
});

const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const editTodo = (todo) => ({
    type: 'EDIT_TODO',
    todo
})

const saveTodo = (id, newText, newDesc) => ({
    type: 'SAVE_TODO',
    id,
    newText,
    newDesc
})

/* category actions */

const addCategory = (text, parent) => ({
    type: 'ADD_CATEGORY',
    id: Date.now(),
    text,
    parent
});

const removeCategory = (id) => ({
    type: 'REMOVE_CATEGORY',
    id
});

const setActiveCategory = (id) => ({
    type: 'SET_ACTIVE_CATEGORY',
    id
});

/* other actions */

const updateProgress = () => ({
    type: 'UPDATE_PROGRESS'
})

const closeEditform = () => ({
    type: 'CLOSE_EDITFORM'
})

export { addTodo, removeTodo, toggleTodo, updateProgress, editTodo, closeEditform, saveTodo, addCategory, removeCategory, setActiveCategory };