import admin from "firebase-admin";
import firebase from "firebase";
import {app} from "firebase-admin/lib/firebase-namespace-api";

const serviceAccount = require("./serviceAccountKey.json");

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const auth = admin.auth();
const db = admin.firestore();

export {auth, db};
