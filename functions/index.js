const functions = require("firebase-functions");
const admin = require("firebase-admin");


admin.initializeApp();

exports.checkOut = functions.https.onCall((data, context) => {
  const ordersRef = admin.database().ref("orders");
  const orderRef = ordersRef.push();
  const orderId = orderRef.key;

  ordersRef.child(orderId).set(data);
  return data;
  // data.items.forEach((item) => {
  //   updates[
  //     `/products/${item.product_uuid}/stocks`
  //   ] = admin.database.ServerValue.increment(1);
  // });

  // return admin.database().ref().update(updates);
});
