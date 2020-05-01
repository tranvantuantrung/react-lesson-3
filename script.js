const todos = ["Go to market", "Buy food", "Make dinner"];

const todoItem = [
  React.createElement("li", null, "Go to market"),
  React.createElement("li", null, "Buy food"),
  React.createElement("li", null, "Make dinner")
];

const todoList = React.createElement("ul", null, ...todoItem);

console.log(todoList);

const app = document.getElementById("app");

ReactDOM.render(todoList, app);
