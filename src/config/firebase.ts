import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Initialize Firebase
admin.initializeApp();
const db: admin.firestore.Firestore = admin.firestore();

export { functions, db, admin };
