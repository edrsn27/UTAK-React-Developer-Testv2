const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var db = admin.database();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.checkOut = functions.https.onCall((data, context) => {
  const ordersRef = db.ref("orders");
  const orderRef = ordersRef.push();
  const orderId = orderRef.key;
  const order = data;
  ordersRef.child(orderId).set(data);

  return {
    orderId,
    order,
  };
});
