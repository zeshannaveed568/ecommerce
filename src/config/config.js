// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB46gaWqG-cel28gKrrN4TWGbnZp1aU5I",
  authDomain: "ecommerce-auth-ecf72.firebaseapp.com",
  projectId: "ecommerce-auth-ecf72",
  storageBucket: "ecommerce-auth-ecf72.appspot.com",
  messagingSenderId: "986422673976",
  appId: "1:986422673976:web:501de3a9cfdb094ec89ccd",
  measurementId: "G-KL958WRXS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
