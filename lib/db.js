import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore
        .collection("users")
        .doc(uid)
        .set({uid, ...data}, {merge: true});
}


export function createSite(data) {
    // console.log(data.site, data.url);
    const newObjToPass = {
        site: data.name,
        url: data.url,
    }

    // console.log(data);

    // console.log(newObjToPass)
    let somethingCool = JSON.parse(JSON.stringify(newObjToPass));
    return firestore
            .collection("sites")
            .add(somethingCool)
}
