import { app } from "../firebase-config";
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions(app);

export function checkout(order) {
  return httpsCallable(functions, "checkOut")({ order });
}
