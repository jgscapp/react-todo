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
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    // .filter is a built-in array method,  take an existin array
    // required a callback function, the callback is called one time for
    // every item in the array, the array is todos the element is todo
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // // filter by searchText
    //  filteredTodos = filteredTodos.filter((todo) => {
    //     var text = todo.text.toLowerCase;
    //    return searchText.length === 0 || text.indexOf(searchText) > -1;
    //  });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed  && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
