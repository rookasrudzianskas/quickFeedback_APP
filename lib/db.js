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
    // console.log(data);

    const newObjToPass = {
        site: data.site,
        url: data.url,
    }

    const somethingCool = JSON.parse(JSON.stringify(newObjToPass));
    console.log(somethingCool);
    return firestore
            .collection("sites")
            .add(somethingCool)
}
