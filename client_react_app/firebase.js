import * as firebase from 'firebase';

//Enter API info bellow
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

