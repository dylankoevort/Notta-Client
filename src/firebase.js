import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import envVariables from "./configs/envVariables.js";

const firebaseConfig = {
  apiKey: envVariables.fbApiKey,
  authDomain: envVariables.fbAuthDomain,
  projectId: envVariables.fbProjectId,
  storageBucket: envVariables.fbStorageBucket,
  messagingSenderId: envVariables.fbMessagingSenderId,
  appId: envVariables.fbAppId,
  measurementId: envVariables.fbMeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Analytics
export const analytics = getAnalytics(app);

// Initialize Firebase auth
export const auth = getAuth(app);
