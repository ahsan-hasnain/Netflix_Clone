// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4afRyQKuaN_Gf9Uw7lXZ1VmCbCTgjzEc",
  authDomain: "netflix-clone-2b55d.firebaseapp.com",
  projectId: "netflix-clone-2b55d",
  storageBucket: "netflix-clone-2b55d.appspot.com",
  messagingSenderId: "607273702058",
  appId: "1:607273702058:web:441a119b8db5691aa7f6d3",
  measurementId: "G-0QTF4ZJSB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
