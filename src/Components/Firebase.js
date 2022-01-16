// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-TNDcXh1EYvpgBV_BaX3LiXXGmd7zvfg",
  authDomain: "cosh-website.firebaseapp.com",
  projectId: "cosh-website",
  storageBucket: "cosh-website.appspot.com",
  messagingSenderId: "105841487305",
  appId: "1:105841487305:web:ec924a1bb98a3647e28c18",
  measurementId: "G-W9XCCF49P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);

export default db;