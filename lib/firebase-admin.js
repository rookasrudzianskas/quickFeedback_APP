import admin from "firebase-admin";
import firebase from "firebase";

// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            client_email: ,
            private_key: ,
            project_id: ,
        }),
        databaseURL: 'https:// .firebase.google.com'
    });
}

export default admin.firestore();
