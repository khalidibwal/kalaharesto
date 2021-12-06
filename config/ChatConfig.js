import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
        apiKey: "AIzaSyAbqDL01F9kwxaFV1pkx0HKmMBbOEySyps",
        authDomain: "hayermi.firebaseapp.com",
        databaseURL: "https://hayermi.firebaseio.com",
        projectId: "hayermi",
        storageBucket: "hayermi.appspot.com",
        messagingSenderId: "825072489182",
        appId: "1:825072489182:web:4922bd283a687a39d9284f",
        measurementId: "G-Z6C0N7WQ9D"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };