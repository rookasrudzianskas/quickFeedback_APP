import * as firebase from "firebase/app";
import 'firebase/auth';
import prod from '../.firebase/prod.json';

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEolWrJ1HLeL80mD_1-bRIdkv1uKk-9b0",
    authDomain: "rookas-quick-feedback.firebaseapp.com",
    projectId: "rookas-quick-feedback",
    storageBucket: "rookas-quick-feedback.appspot.com",
    messagingSenderId: "676110362122",
    appId: "1:676110362122:web:d1a3a9346c38a86e61a1f3",
    measurementId: "G-QEXM9WRB27"
};


export default firebase;
