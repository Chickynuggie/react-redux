import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer.js';

const store = createStore(reducer);

it('', () => {
  const component = document.createElement(
    <div></div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
        <App />
      </Provider>, div);
});
