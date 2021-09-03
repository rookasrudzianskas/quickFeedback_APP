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
            // console.log(rawUser.currentUser?.getIdToken());
            // console.log(rawUser)
            createUser(user.uid, userWithoutToken);

            setUser(user);
            cookie.set('quick-feedback-auth', true);
            return user;
        } else {
            setUser(false);
            return false;
        }
    }
//Aa is what I need

    console.log("This is user", user);

    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
            });
    };

    const signout = () => {

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
        signout
    };
}

const formatUser = (user) => {
    // we form the user object first, because we do not need all the data from object
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.Aa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
    }
}
