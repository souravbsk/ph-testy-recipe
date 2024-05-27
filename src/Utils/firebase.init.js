// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiiC0e6dRHrF0cdl1I4kUw9skXjnv1hkA",
  authDomain: "ph-testy-treat.firebaseapp.com",
  projectId: "ph-testy-treat",
  storageBucket: "ph-testy-treat.appspot.com",
  messagingSenderId: "287377549766",
  appId: "1:287377549766:web:a08fe545b431c246c9aac7",
  measurementId: "G-VQGXGJTLM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
