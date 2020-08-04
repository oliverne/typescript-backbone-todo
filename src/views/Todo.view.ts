import Backbone from 'backbone';
import _ from 'underscore';
import TodoModel from '../models/Todo.model.js';

export default class TodoView extends Backbone.View<TodoModel> {
  static templateFn = _.template(`<p><%= title %> - <%= completed %></p>`);

  initialize() {
    console.log('TodoView initialized');
    this.listenTo(this.model, 'change', this.render);
  }

  /*
  constructor(options: Backbone.ViewOptions<TodoModel>) {
    super(options);
  }
  */

  get tagName() {
    return 'h1';
  }

  get template() {
    return TodoView.templateFn;
  }

  render() {
    const context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
}
