import Backbone from 'backbone';

interface ITodo {
  title: string;
  completed?: boolean;
  createdAt?: number;
}

export default class Todo extends Backbone.Model<ITodo, {}> {
  initialize() {
    console.log('TodoModel initialized');
    this.set('createdAt', Date.now());
    this.set('completed', false);
  }

  /*
  constructor(attrs: ITodo, options?: Backbone.ModelSetOptions) {
    super(attrs, options);
  }
  */

  toggle() {
    this.set('completed', !this.get('completed'));
  }
}
