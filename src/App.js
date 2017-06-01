import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import {
  addTodo, removeTodo, toggleTodo, updateProgress,
  editTodo, closeEditform, saveTodo,
  addCategory, removeCategory, setActiveCategory
} from './actions/actions.js'
import ToDo from './components/todoitem.js'
import EditForm from './components/editform.js';
import Category from './components/category.js';
import { ActionCreators } from 'redux-undo';
import { HashRouter, Route, Switch } from 'react-router-dom';

let App = (store) => {
  const dispatch = store.dispatch;

  const removeTodoItem = (todoId) => {
    dispatch(removeTodo(todoId));
  }

  const update = () => {
    dispatch(updateProgress());
  }

  const toggleCompletion = (todoId) => {
    dispatch(toggleTodo(todoId));
    dispatch(updateProgress());
  }

  const editTodoItem = (todo) => {
    dispatch(editTodo(todo));
  }

  const closeEditing = () => {
    dispatch(closeEditform());
  }

  const saveItem = (id, newText, newDesc) => {
    dispatch(saveTodo(id, newText, newDesc));
  }

  const removeCateg = (categId, parent) => {
    dispatch(removeCategory(categId, parent));
  }

  const setActiveCateg = (categId) => {
    dispatch(setActiveCategory(categId));
  }

  const application = () => (
    <div className="App">
      <h1>TO-DO list <i className="fa fa-list" aria-hidden="true"></i></h1>
      <i className="fa fa-undo float-right" onClick={() => { dispatch(ActionCreators.undo()); }} aria-hidden="true">undo</i>
      <i className="fa fa-repeat float-right" onClick={() => { dispatch(ActionCreators.redo()); }} aria-hidden="true">redo</i>
      <h2>PROGRESS:</h2> <br /><progress max={store.todos.length} value={store.progress} ></progress><br />
      <div className="float-right todo-list">
        <input type="text" placeholder="enter todo" id="newTodo" />
        <input type="button" value="add todo" onClick={() => { dispatch(addTodo(document.getElementById('newTodo').value, store.activeCategory)) }} />
        <ul>
          {
            store.todos.filter(todo => todo.category === store.activeCategory).map((todo) =>
              <ToDo
                key={todo.id}
                todo={todo}
                remove={removeTodoItem}
                toggle={toggleCompletion}
                edit={editTodoItem}
              />
            )
          }
        </ul>
      </div>
      <div className="float-left category-wrapper">
        <input type="text" placeholder="enter new main category" id="newCateg" />
        <input
          type="button"
          value="add category"
          onClick={() => { dispatch(addCategory(document.getElementById('newCateg').value, false)) }}
        />
        <ul>
          {
            store.categories.filter(category => category.parent === false).map((category) =>
              <Category
                id={category.id}
                key={category.id}
                name={category.name}
                remove={removeCateg}
                setActiveCategory={setActiveCateg}
                parent={category.parent}
              />
            )
          }
        </ul>
      </div>
    </div>
  );

  const editForm = () => (
    <EditForm
      todo={store.editing}
      close={closeEditing}
      save={saveItem}
    />
  );

  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" component={application} />
          <Route path="/edit" component={editForm} />
        </div>
      </HashRouter>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    todos: state.present.todos,
    categories: state.present.categories,
    progress: state.present.progress,
    editing: state.present.editing,
    activeCategory: state.present.activeCategory
  }
}

App = connect(mapStateToProps)(App);

export default App;
