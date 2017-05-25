import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { addTodo, removeTodo, toggleTodo, updateProgress, editTodo, closeEditform, saveTodo } from './actions/actions.js'
import ToDo from './components/todoitem.js'
import EditForm from './components/editform.js';

let App = (store) => {

  const dispatch = store.dispatch;

  const remove = (todoId) => {
    dispatch(removeTodo(todoId));
  }

  const toggleCompletion = (todoId) => {
    dispatch(toggleTodo(todoId));
  }

  const update = () => {
    dispatch(updateProgress());
  }

  const editTodoItem = (todo) => {
    dispatch(editTodo(todo));
  }

  const closeEditing = () => {
    dispatch(closeEditform());
  }

  const saveItem = (id, newText) => {
    dispatch(saveTodo(id, newText));
  }

  if (store.editing) {
    return (
      <EditForm
        todo={store.editing}
        close={closeEditing}
        save={saveItem}
      />
    )
  } else {
    return (
      <div className="App">
        <h1>TO-DO list <i className="fa fa-list" aria-hidden="true"></i></h1>
        <h2>PROGRESS:</h2> <br /><progress max={store.todos.length} value={store.progress} ></progress><br />
        <input type="text" placeholder="enter todo" id="newTodo" />
        <input type="button" value="add todo" onClick={() => { dispatch(addTodo(document.getElementById('newTodo').value)) }} />
        <ul>
          {
            store.todos.map((todo) =>
              <ToDo
                key={todo.id}
                todo={todo}
                remove={remove}
                toggle={toggleCompletion}
                update={update}
                edit={editTodoItem}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    progress: state.progress,
    editing: state.editing
  }
}

App = connect(mapStateToProps)(App);

export default App;
