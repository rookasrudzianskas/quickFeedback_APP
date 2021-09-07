import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise;

const PUBLIC_STRIPE_PUBLISHABLE_KEY = 'pk_test_51JWgSuCN11vOEiFGHIE7YEqnLbvzw0GEyzSBkamIUa7mB42k4My9f98ElYDQGEbP7uGU06Ze0sAxGuzaqw1YwyQI00aSoEO7qN'

const getStripe = () => {
    console.log("Get stripe init ")
    if (!stripePromise) {
        stripePromise = loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }

    return stripePromise;
};

export default getStripe;
