// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOuK9i8bmh3c2mhpeVGee19Rr0Zk-gNNg",
  authDomain: "collegeinformationwebsite.firebaseapp.com",
  projectId: "collegeinformationwebsite",
  storageBucket: "collegeinformationwebsite.appspot.com",
  messagingSenderId: "163212673258",
  appId: "1:163212673258:web:fda564727a9a8428e15793",
  measurementId: "G-EVBFLKT555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}