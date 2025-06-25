// firebase/config.js
import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig
 = {
  apiKey: Constants.expoConfig?.extra?.FIREBASE_API_KEY,
  authDomain: Constants.expoConfig?.extra?.FIREBASE_AUTH_DOMAIN,
  projectId: Constants.expoConfig?.extra?.FIREBASE_PROJECT_ID,
  storageBucket: Constants.expoConfig?.extra?.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig?.extra?.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig?.extra?.FIREBASE_APP_ID
}

console.log('FIREBASE CONFIG:', firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
