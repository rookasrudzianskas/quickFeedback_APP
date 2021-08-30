import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore.collection("users").document(uid).set({
        uid, ...data
    }, {merge: true});
}
