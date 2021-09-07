import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    console.log("Get stripe init ")
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51JWgSuCN11vOEiFGHIE7YEqnLbvzw0GEyzSBkamIUa7mB42k4My9f98ElYDQGEbP7uGU06Ze0sAxGuzaqw1YwyQI00aSoEO7qN');
    }

    return stripePromise;
};

export default getStripe;
