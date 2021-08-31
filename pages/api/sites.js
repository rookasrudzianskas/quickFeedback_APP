// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";

export default function handler(_, res) {
  const sitesRef = db.collection("sites");

  const getDoc = sitesRef
      .get()
      .then((doc) => {

        if(!doc.exists) {
            console.log('No such document!');
          }

          res.status(200).json({ name: "Rokas" });

      })
          .catch((err) =>  {
            console.log("Error getting document", err);
          })

        res.status(200).json({ name: "Rokas" });

};

