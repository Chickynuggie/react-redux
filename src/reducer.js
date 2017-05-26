const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [...state.todos, { text: action.text, id: action.id, done: false }]
            });
        case 'REMOVE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            });
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, done: !todo.done }
                    } else {
                        return todo
                    }
                })
            });
        case 'UPDATE_PROGRESS':
            return Object.assign({}, state, {
                progress: state.todos.filter((todo) => todo.done).length
            });
        case 'EDIT_TODO':
            return Object.assign({}, state, {
                editing: action.todo
            });
        case 'CLOSE_EDITFORM':
            return Object.assign({}, state, {
                editing: false
            });
        case 'SAVE_TODO':
            return Object.assign({}, state, {
                editing: false,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        console.log(action.newText);
                        return { ...todo, text: action.newText, description: action.newDesc }
                    } else {
                        return todo
                    }
                })
            });

        default:
            return state
    }
}

export default reducer;