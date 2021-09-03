// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";
import {getAllSites} from "@/lib/db-admin";

export default async function handler(req, res) {
    // console.log(req.headers);
    const token = req.headers.token;
    const { sites, error } = await  getAllSites();

    if(error) {
        res.status(500).json({ error: error });
    }

    res.status(200).json({sites});

};

