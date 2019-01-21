import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCJPkOm0Jus8DnMd_j80Z5ATDZ8hd3NjgU',
  authDomain: 'learn-words-30aff.firebaseapp.com',
  databaseURL: 'https://learn-words-30aff.firebaseio.com',
  projectId: 'learn-words-30aff',
  storageBucket: 'learn-words-30aff.appspot.com',
  messagingSenderId: '654780330496',
};

const fb = firebase.initializeApp(config);

export default fb;
