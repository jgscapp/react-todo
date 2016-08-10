import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyC14UmUHKSDvPe8PNLxoBEOdQe3xF417qs",
    authDomain: "todo-app-f66dd.firebaseapp.com",
    databaseURL: "https://todo-app-f66dd.firebaseio.com",
    storageBucket: "todo-app-f66dd.appspot.com",
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
 firebaseRef.set({
   app: {
     name: 'Todo App',
     version: '1.0.0'
   },
   isRunning: true,
   user: {
     name: 'Gerry',
     age: 47
   }
 }).then(() => {
   console.log('Set worked!');
 }, (e) => {
   console.log('Set failed');
 });

// firebaseRef.child('user').set({
//   name: 'Gerardo'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });

// update the data without deleting the rest of the data
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application',
//   'user/name': 'Sonia'
// });
//
// firebaseRef.child('app').update({
//   version: '2.0.0'
// }).then(() => {
//   console.log('update worked!');
// }, (e) => {
//   console.log('update failed');
// })
//
// firebaseRef.child('user').update({ age: 43});
//
//
// //how remove data with remove
// firebaseRef.child('app/name').remove();
//
// //how remove data using null
// firebaseRef.child('app').update({
//   version: '3.0',
//   name: null
// });

//fetch all the data from the table
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// //fetch only one part of the data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
//
// //function called everytime tha values in the table changes
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val())
// }) ;
//
// //turn off all the event listeners
// firebaseRef.off();
//
// //if move the callback into a variable you can turnoff only once
// //specific linstener
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val())
// };
// firebaseRef.on('value', logData );
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false})


//arrays

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog'
// });
// console.log('Todo id', newNoteRef.key);


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
