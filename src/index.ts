import Backbone from "https://cdn.skypack.dev/backbone@^1.4.0";
import _ from "https://cdn.skypack.dev/underscore@^1.10.2";

interface ITodo {
  title: string;
  completed?: boolean;
  createdAt?: number;
}

class Todo extends Backbone.Model<ITodo, {}> {
  initialize() {
    console.log("init model");
    this.set("createdAt", Date.now());
    this.set("completed", false);
    this.on("change", this.onChange);
  }

  constructor(attrs: ITodo, options?: Backbone.ModelSetOptions) {
    super(attrs, options);
    console.log("ctor model", attrs, options);
  }

  toggle() {
    this.set("completed", !this.get("completed"));
  }

  onChange() {
    console.log("Model changed", this.changed);
  }
}

class TodoView extends Backbone.View<Todo> {
  static templateFn = _.template(`<p><%= title %> - <%= completed %></p>`);

  initialize() {
    console.log("init view -------------");
    this.listenTo(this.model, "change", this.render);
    this.render();
  }

  constructor(options: Backbone.ViewOptions<Todo>) {
    super(options);
    console.log("ctor view -------------");
  }

  get tagName() {
    return "h1";
  }

  get template() {
    return TodoView.templateFn;
  }

  render() {
    const context = this.model.toJSON();
    console.log("render template", this.template);
    this.$el.html(this.template(context));
    return this;
  }
}

const todo = new Todo({
  title: "Hello",
});

console.log("underscore", _.template);

console.log(todo.toJSON());

todo.set("completed", true);
todo.toggle();
console.log(todo);

const todoView = new TodoView({ model: todo });

console.log(todoView.el);

document.getElementById("root")?.appendChild(todoView.el);

setTimeout(() => {
  todo.toggle();
  document.getElementById("root")?.appendChild(todoView.el);
}, 1500);
