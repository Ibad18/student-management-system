// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDCKqHI3c18tXYXMdnkHPxYRPT6p9ubQ",
  authDomain: "student-management-syste-72bda.firebaseapp.com",
  projectId: "student-management-syste-72bda",
  storageBucket: "student-management-syste-72bda.appspot.com",
  messagingSenderId: "969174596778",
  appId: "1:969174596778:web:29a8aea540ac03f81c24d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}