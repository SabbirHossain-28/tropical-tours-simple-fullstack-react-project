// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-mKaKTs52EcgCq9-4anj4Km64pdzRFU",
  authDomain: "tropical-tours-project.firebaseapp.com",
  projectId: "tropical-tours-project",
  storageBucket: "tropical-tours-project.appspot.com",
  messagingSenderId: "750161133287",
  appId: "1:750161133287:web:e9c3f5970f7e3ee0cf6c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;