
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"; // handle database
import { getStorage } from "firebase/storage"; // to upload files


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI1A8Ha5XBpbdHionLSfOpspSfhSoVOjI",
  authDomain: "lec-2-e4e25.firebaseapp.com",
  projectId: "lec-2-e4e25",
  storageBucket: "lec-2-e4e25.appspot.com",
  messagingSenderId: "87160367273",
  appId: "1:87160367273:web:ad14f4d1de98fa4dca61b8",
  measurementId: "G-S9KPKHCFKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
