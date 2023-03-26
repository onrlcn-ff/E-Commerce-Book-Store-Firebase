import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAsXzgw_xeChIHF9QEz2oa4Y3wWDwFbXE",
  authDomain: "book-store-fsf.firebaseapp.com",
  projectId: "book-store-fsf",
  storageBucket: "book-store-fsf.appspot.com",
  messagingSenderId: "162849905302",
  appId: "1:162849905302:web:8e8a39fb3147ec2aa0c0b7",
  measurementId: "G-6Q545R3358",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, firestore };
