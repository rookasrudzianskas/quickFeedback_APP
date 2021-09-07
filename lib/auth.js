import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from "./firebase";
import {createUser} from "./db";
import {useRouter} from "next/router";
import cookie from 'js-cookie';


const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async(rawUser) => {

        if(rawUser) {
            const user = await formatUser(rawUser);
            const {token, ...userWithoutToken} = user;
            // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
            // console.log("This is decoded token", decodedToken.claims.stripeRole)
            // console.log(rawUser.currentUser?.getIdToken());
            // console.log(rawUser)
            createUser(user.uid, userWithoutToken);

            setUser(user);
            cookie.set('quick-feedback-auth', true, {
                expires: 1
            })

            return user;
        } else {
            // await router.push('/');
            setUser(false);
            cookie.remove('quick-feedback-auth')
            return false;
        }
    }
//Aa is what I need

    // console.log("This is user", user);
    const router = useRouter();

    const signinWithGithub = () => {
        router.push('/dashboard');

        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
            });
    };

    const signinWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
            });
    };

    const signout = () => {
        router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
            });
    };


    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);


        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signinWithGoogle,
        signout
    };
}

const getStripeRole = async () => {
    await firebase.auth().currentUser.getIdToken(true);
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
    return decodedToken.claims.stripeRole;
}
const formatUser = async (user) => {
    // we form the user object first, because we do not need all the data from object
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.Aa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        stripeRole: await getStripeRole(),
    }
}

// done for today with new plugins
