// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIkXFeOBOrxOKTmGVyGeO1HNHhjv7BOzc",
  authDomain: "inventory-fa0f4.firebaseapp.com",
  projectId: "inventory-fa0f4",
  storageBucket: "inventory-fa0f4.appspot.com",
  messagingSenderId: "748226235199",
  appId: "1:748226235199:web:4f33554d029dcccb5b618a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;