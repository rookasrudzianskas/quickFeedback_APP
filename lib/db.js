import firebase from "./firebase";
import getStripe from "@/lib/stripe";

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore
        .collection("users")
        .doc(uid)
        .set({uid, ...data}, {merge: true});
}


export function createSite(data) {
    const site = firestore.collection('sites').doc();
    site.set(data);


    return site;
}

export function createFeedback(data) {
    return firestore.collection('feedback').add(data);
}

export function deleteFeedback(id) {
    return firestore.collection('feedback').doc(id).delete();
}


export async function createCheckoutSession(uid) {
    // return firestore.collection('feedback').doc(id).delete();
    const checkoutSessionRef = await firestore
        .collection('users')
        .doc(uid)
        .collection('checkout_sessions')
        .add({
            price: 'prod_KB3fXxyRK8B0Uk',
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

    checkoutSessionRef.onSnapshot(async (snap) => {
        const {sessionId} = snap.data();
        if (sessionId) {
            // We have a session, let's redirect to Checkout
            // Init Stripe
            const stripe = await getStripe();
            await stripe.redirectToCheckout({sessionId});
        }
    });

}
// done for today
