const functions = require("firebase-functions");
import { db } from "../../firebase-config";
import { ref, onValue } from "firebase/database";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.getProducts = functions.https.onCall((data, context) => {
//   const productsRef = ref(db, "products/");

//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     if (data !== null && data !== undefined) {
//       return data.value();
//     }
//   });
// });
