// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";

export default async function handler(_, res) {
    const snapshot = await db.collection("sites").get();

    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

    const getDoc = sitesRef
        .then((doc) => {

            if (!doc.exists) {
                console.log('No such document!');
            }

            res.status(200).json(doc.data());

        })
        .catch((err) => {
            console.log("Error getting document", err);
        })

    res.status(200).json({name: "Rokas"});

};

