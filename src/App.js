import React from 'react';
import { connect } from 'react-redux';
import './App.css';

let App = (state, dispatch) => {

  const addTodo = (text) => state.dispatch({
    type: 'ADD_TODO',
    id: Date.now(),
    text
  });

  const removeTodo = (id) => state.dispatch({
    type: 'REMOVE_TODO',
    id
  });

  const toggleTodo = (id) => state.dispatch({
    type: 'TOGGLE_TODO',
    id
  });

  const updateProgress = () =>  state.dispatch({
    type: 'UPDATE_PROGRESS'
  });

  return (
    <div className="App">
      PROGRESS: <br /><progress max={state.todos.length} value={state.progress} ></progress><br />
      <input type="text" placeholder="enter todo" id="newTodo" />
      <input type="button" value="add todo" onClick={() => { addTodo(document.getElementById('newTodo').value) }} />
      <ul>
        {
          state.todos.map((todo) =>
            <li key={todo.id} id={todo.id} className={'task-completion-' + todo.done}>
              {todo.text} <a href="#" onClick={() => { removeTodo(todo.id); updateProgress(); }}>X</a> <a href="#" onClick={() => { toggleTodo(todo.id); updateProgress(); }}>toggle</a>
            </li>
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
