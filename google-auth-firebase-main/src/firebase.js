
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMo_rvqK0r1c7CT9As5i9mA5vvrZY130o",
  authDomain: "ffl-test-1.firebaseapp.com",
  projectId: "ffl-test-1",
  storageBucket: "ffl-test-1.appspot.com",
  messagingSenderId: "910556983924",
  appId: "1:910556983924:web:1c9329f73b58c04afa9721"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
