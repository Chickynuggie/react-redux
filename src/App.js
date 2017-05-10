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

  console.log('todos:', state.todos);
  return (
    <div className="App">
        <input type="text" placeholder="enter todo" id="newTodo" />
        <input type="button" value="add todo" onClick={()=> {addTodo(document.getElementById('newTodo').value)}} />
      <ul>
        {
          state.todos.map((todo) =>
            <li key={todo.id} id={todo.id}>
             <span onClick={()=> {toggleTodo(todo.id)}}> {todo.text} </span>
             <a href="#" onClick={()=> {removeTodo(todo.id)}}>X</a>
            </li>
          )
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

App = connect(mapStateToProps)(App);

export default App;
