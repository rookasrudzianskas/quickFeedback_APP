import firebase from "./firebase-admin";

export async function getAllFeedback(siteId) {
    const snapshot = await firebase
        .collection('feedback')
        .where('siteId', '==', siteId)
        .get();

    let feedback = [];

    snapshot.forEach(doc => {
        feedback.push({id: doc.id, ...doc.data()});
        // console.log(doc.id, '=>', doc.data());
    });

    return feedback;

}

