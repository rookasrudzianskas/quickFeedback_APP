// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";
import {getAllSites} from "@/lib/db-admin";

export default async function handler(_, res) {
    const sites = await  getAllSites();

    res.status(200).json({sites});

};

