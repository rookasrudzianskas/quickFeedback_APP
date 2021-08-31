import admin from "firebase-admin";
import firebase from "firebase";

const serviceAccount = require("./serviceAccountKey.json");

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default admin.firestore();
