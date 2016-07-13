var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
   if ($.isArray(todos)){
     //JSON.stringify convert array to string
     localStorage.setItem('todos', JSON.stringify(todos));
     return todos;
   }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      //JSON.parse convert string into array
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
    // this code is the same as the above
    return $.isArray(todos) ? todos : [];
  }
};
