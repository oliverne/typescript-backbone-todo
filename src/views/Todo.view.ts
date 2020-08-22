import Backbone from 'backbone';
import _ from 'underscore';
import TodoModel, { ITodoModel } from '../models/Todo.model.js';

export default class TodoView extends Backbone.View<TodoModel> {
  static templateFn = _.template(
    `<p><%= title %> - <%= completed.toString().toUpperCase() %></p>`
  );

  constructor(options: Backbone.ViewOptions<TodoModel>) {
    super(options);
    console.log('TodoView initialized');
    this.listenTo(this.model, 'change', this.render);
  }

  get tagName() {
    return 'h1';
  }

  get template() {
    return TodoView.templateFn;
  }

  render() {
    const context = this.model.toJSON() as ITodoModel;
    this.$el.html(this.template(context));
    console.log('TodoView rendered');
    return this;
  }
}
