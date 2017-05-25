import React, { Component } from 'react';
import ToDo from './components/todoitem.js'

class Category extends Component {

    const

    render() {
        return (

            <ul>
                {
                    store.todos.map((todo) =>
                        <ToDo
                            key={todo.id}
                            id={todo.id}
                            todo={todo.text}
                            completed={todo.done}
                            remove={remove}
                            toggle={toggle}
                            update={update}
                        />
                    )
                }
            </ul>
        )
    }
}

export default Category;