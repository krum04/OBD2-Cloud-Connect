import * as firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};


firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
//export const firebase

