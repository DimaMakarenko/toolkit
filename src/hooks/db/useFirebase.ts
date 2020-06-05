import { useEffect } from "react";
import * as firebase from "firebase";

const firebaseConfig = Object.freeze({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
});

export default function useFirebase() {
  useEffect(() => {
    if (!firebase.apps.length) {
      console.log("Firebase initialized");
      firebase.initializeApp(firebaseConfig);
      //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }
  }, []);

  return firebase;
}
