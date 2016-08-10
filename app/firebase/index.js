import firebase from 'firebase';


try {
  var config = {
    apiKey: "AIzaSyC14UmUHKSDvPe8PNLxoBEOdQe3xF417qs",
    authDomain: "todo-app-f66dd.firebaseapp.com",
    databaseURL: "https://todo-app-f66dd.firebaseio.com",
    storageBucket: "todo-app-f66dd.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
