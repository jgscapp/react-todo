var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render : function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          //we have to use a unique key so react keep track of your list items
          // use spread operator ... to takes every attributes and pass as a props
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
