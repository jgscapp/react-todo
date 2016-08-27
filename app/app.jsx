var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});


//import './../playground/firebase/index';

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });


// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));


//asynchronus action goes off fetch data from firebase
store.dispatch(actions.startAddTodos());


//default values
// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
//require('style!css!applicationStyles')

// app with sass
require('style!css!sass!applicationStyles')



ReactDOM.render(
  //<TodoApp/>,
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
