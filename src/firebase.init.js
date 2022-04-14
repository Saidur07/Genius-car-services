// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu2xC3M5evwGsteQdgceI1ObKRxH7R1VY",
  authDomain: "genius-car-services-7.firebaseapp.com",
  projectId: "genius-car-services-7",
  storageBucket: "genius-car-services-7.appspot.com",
  messagingSenderId: "208112265455",
  appId: "1:208112265455:web:ba4c11a4c589b5ff96931a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
