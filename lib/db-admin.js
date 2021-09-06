import {db} from "./firebase-admin";
import {compareDesc, parseISO} from "date-fns";

export async function getAllFeedback(siteId) {
    try {
        const snapshot = await db
            .collection('feedback')
            .where('siteId', '==', siteId)
            .get();

        let feedback = [];

        snapshot.forEach(doc => {
            feedback.push({id: doc.id, ...doc.data()});
            // console.log(doc.id, '=>', doc.data());
        });

        feedback.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))

        return { feedback };
    } catch (err) {
        console.log(err);
        return {err};
    }

}


export async function getAllSites() {
    try {

        const snapshot = await db.collection("sites").get();
        let sites = [];

        snapshot.forEach(doc => {
            sites.push({id: doc.id, ...doc.data()});
            // console.log(doc.id, '=>', doc.data());
        });


        return {sites};
    } catch (err) {
        console.log(err);
        return {err};
    }
}


export async function getUserSites(userId) {

        const snapshot = await db.collection("sites").where('authorId', '==', userId).get();
        let sites = [];

        snapshot.forEach(doc => {
            sites.push({id: doc.id, ...doc.data()});
            // console.log(doc.id, '=>', doc.data());
        });

        return {sites};
}




export async function getUserFeedback(uid) {

    const snapshot = await db.collection("feedback").where('authorId', '==', uid).get();
    let feedback = [];

    snapshot.forEach(doc => {
        feedback.push({id: doc.id, ...doc.data()});
        // console.log(doc.id, '=>', doc.data());
    });

    return {feedback};
}

export async function getSite(siteId) {
    const doc = await db.collection('sites').doc(siteId).get();
    const site = { id: doc.id, ...doc.data() };

    return { site };
}
