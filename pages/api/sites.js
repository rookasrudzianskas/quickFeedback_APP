// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";

export default async function handler(_, res) {
    const snapshot = await db.collection("sites").get();
    let sites = [];

    snapshot.forEach(doc => {
        sites.push({id: doc.id, ...doc.data()});
        console.log(doc.id, '=>', doc.data());
    });

    res.status(200).json({sites});

};

