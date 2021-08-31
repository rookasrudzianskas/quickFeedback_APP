// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {db} from "@/lib/firebase";

export default function handler(_, res) {
  const sitesRef = db.collection("sites");

  const getDoc = sitesRef.get().then((doc) => {
    if(!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document found, data is:', doc.data());
      }
  })
      .catch((err) =>  {
        console.log("Error getting document", err);
      })


};

