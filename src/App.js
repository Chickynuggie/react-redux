import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { addTodo, removeTodo, toggleTodo, updateProgress } from './actions/actions.js'
import ToDo from './components/todoitem.js'

let App = (store) => {

  const dispatch = store.dispatch;

  const remove = (todoId) => {
    dispatch(removeTodo(todoId));
  }

  const toggle = (todoId) => {
    dispatch(toggleTodo(todoId));
  }

  const update = () => {
    dispatch(updateProgress());
  }

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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    progress: state.progress
  }
}

App = connect(mapStateToProps)(App);

export default App;
