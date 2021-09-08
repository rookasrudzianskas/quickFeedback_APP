import firebase, {apps} from "./firebase";
import getStripe from "@/lib/stripe";
import LoginButtons from "@/components/LoginButtons";

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

export function updateFeedback(id, newValues) {
    return firestore.collection('feedback').doc(id).update(newValues);
}


export async function createCheckoutSession(uid) {
    // return firestore.collection('feedback').doc(id).delete();
    const checkoutSessionRef = await firestore
        .collection('users')
        .doc(uid)
        .collection('checkout_sessions')
        .add({
            price: 'price_1JWhYCCN11vOEiFGJywnhW7a',
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

    // console.log(checkoutSessionRef)

    checkoutSessionRef.onSnapshot(async (snap) => {
        const {sessionId} = snap.data();

        if (sessionId) {
        // console.log("There is session id");
            // We have a session, let's redirect to Checkout
            // Init Stripe
            const stripe = await getStripe();
            await stripe.redirectToCheckout({sessionId});
        }
    });

}
// stripe integration and payment is almost done

// the billing portal || working
export async function goToBillingPortal() {
    const functionRef = apps()
        .functions('us-central1')
        .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');

    const { data } = await functionRef({
        returnUrl: `${window.location.origin}/account`
    });

    window.location.assign(data.url);
}

