import firebase from "./firebase-admin";
import {db} from "@/lib/firebase";
import {compareDesc, parseISO} from "date-fns";

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

    feedback.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))

    return feedback;

}


export async function getAllSites() {

    const snapshot = await firebase.collection("sites").get();
    let sites = [];

    snapshot.forEach(doc => {
        sites.push({id: doc.id, ...doc.data()});
        // console.log(doc.id, '=>', doc.data());
    });


    return sites;

}

