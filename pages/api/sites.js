// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getAllSites} from "@/lib/db-admin";

export default async function handler(req, res) {
    // console.log(req.headers);
    // const token = req.headers.token;
    // const user = await auth.verifyIdToken(req.headers.token);
    // console.log("This is user something", user);
    const { sites, error } = await  getAllSites();

    if(error) {
        res.status(500).json({ error: error });
    }

    res.status(200).json({sites});

};

