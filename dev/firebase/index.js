import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAgM6E117X1j6hSZnW-yKAXv64lQpG1dhc',
    authDomain: 'todo-167eb.firebaseapp.com',
    databaseURL: 'https://todo-167eb.firebaseio.com',
    projectId: 'todo-167eb',
    storageBucket: 'todo-167eb.appspot.com',
    messagingSenderId: '1090084546616',
};

firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const todosRef = firebase.database().ref('todos');
const priorityRef = firebase.database().ref('priority');

export {
    todosRef,
    priorityRef,
};
