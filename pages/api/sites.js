// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";

export default function handler(_, res) {
  const  sitesRef = db.collection("sites");
}

