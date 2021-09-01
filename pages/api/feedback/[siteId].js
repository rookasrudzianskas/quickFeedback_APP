// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";
import {getAllFeedback} from "@/lib/db-admin";

export default async function handler(req, res) {
    const feedback = getAllFeedback();

    res.status(200).json({ feedback });

};

