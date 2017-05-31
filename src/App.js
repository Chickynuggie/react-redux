import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { addTodo, removeTodo, toggleTodo, updateProgress,
     editTodo, closeEditform, saveTodo,
     addCategory, removeCategory, setActiveCategory } from './actions/actions.js'
import ToDo from './components/todoitem.js'
import EditForm from './components/editform.js';
import Category from './components/category.js';

let App = (store) => {

  const dispatch = store.dispatch;

  const removeTodoItem = (todoId) => {
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

  const saveItem = (id, newText, newDesc) => {
    dispatch(saveTodo(id, newText, newDesc));
  }

  const addCategory = (text, categId, parent) =>{
    dispatch(addCategory(text, categId, parent));
  }

  const removeCateg = (categId, parent) => {
    dispatch(removeCategory(categId, parent));
  }

  const setActiveCateg = (categId) => {
    dispatch(setActiveCategory(categId));
  }

  const filterTodosById = (todo) =>{
    if(todo.id === store.activeCategory) {
      return todo;
    }
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
                    update={update}
                    edit={editTodoItem}
                  />

              )}
          </ul>
        </div>
        <div className="float-left">
           <ul>
            {
              store.categories.map((category) =>
                <Category
                  id={category.id}
                  key={category.id}
                  name={category.name}
                  remove={removeCateg}
                  setActiveCategory={setActiveCateg}
                  parent={category.parent}
                  update={update}
                />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    categories: state.categories,
    progress: state.progress,
    editing: state.editing,
    activeCategory:state.activeCategory
  }
}

App = connect(mapStateToProps)(App);

export default App;
