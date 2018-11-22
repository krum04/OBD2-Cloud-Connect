import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAI447DeBhpYxYtNQH4O7EVgECLnroKLsI",
    authDomain: "obdiidata.firebaseapp.com",
    databaseURL: "https://obdiidata.firebaseio.com",
    projectId: "obdiidata",
    storageBucket: "obdiidata.appspot.com",
    messagingSenderId: "1042173504848"
};


firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
//export const firebase

