import _ from 'underscore';
import TodoModel from './models/Todo.model.js';
import TodoView from './views/Todo.view.js';

const todo = new TodoModel({
  title: 'Hello',
});

const todoView = new TodoView({ model: todo });

todoView.render();

document.getElementById('root')?.appendChild(todoView.el);

setTimeout(() => {
  todo.toggle();
  document.getElementById('root')?.appendChild(todoView.el);
}, 2000);
