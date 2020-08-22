import Backbone from 'backbone';

export interface ITodoModel {
  title: string;
  completed?: boolean;
  createdAt?: number;
}

export default class TodoModel extends Backbone.Model<ITodoModel, {}> {
  constructor(attrs: ITodoModel, options?: Backbone.ModelSetOptions) {
    super(attrs, options);
    console.log('TodoModel initialized');
    this.on('change', this.onChange);

    this.set('createdAt', Date.now());
    this.set('completed', false);
  }

  toggle() {
    this.set('completed', !this.get('completed'));
  }

  get completed() {
    return this.get('completed');
  }

  onChange() {
    console.log('TodoModel changed', this.changed);
  }
}
