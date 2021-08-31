import admin from "firebase-admin";
import firebase from "firebase";
import {app} from "firebase-admin/lib/firebase-namespace-api";

const serviceAccount = require("./serviceAccountKey.json");

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default admin.firestore();
