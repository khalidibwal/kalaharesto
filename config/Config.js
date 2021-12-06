// import * as firebase from 'firebase';
// import firestore from 'firebase/compat/firestore'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/app';
// import 'firebase/auth'

 const firebaseConfig = {
    apiKey: "AIzaSyAbqDL01F9kwxaFV1pkx0HKmMBbOEySyps",
    authDomain: "hayermi.firebaseapp.com",
    databaseURL: "https://hayermi.firebaseio.com",
    projectId: "hayermi",
    storageBucket: "hayermi.appspot.com",
    messagingSenderId: "825072489182",
    appId: "1:825072489182:web:4922bd283a687a39d9284f",
    measurementId: "G-Z6C0N7WQ9D"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;